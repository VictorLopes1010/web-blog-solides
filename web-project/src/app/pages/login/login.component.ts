import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { LoginRegisterModel } from '../../models/loginRegister.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private toast: ToastrService,
    private router: Router
  ) {}

  loginInfos: LoginRegisterModel = new LoginRegisterModel();

  showPassword: boolean = false;

  isRegister: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  toggleLoginRegiste() {
    this.isRegister = !this.isRegister;
  }

  loginOrRegiste() {
    const email = this.loginInfos.email;
    const password = this.loginInfos.password;
    const name = this.loginInfos.name;

    if (email == undefined || email && !this.validarEmail(email)) {
        this.toast.error('Insira um email válido');
        return;
    }

    if (password == undefined || (password && password.length <= 3)) {
        this.toast.error('Senha precisa ter mais que 3 caracteres');
        return;
    }

    if (this.isRegister && name == undefined) {
        this.toast.error('Insira um nome');
        return;
    }

    if (!this.isRegister) {
        this.userService.login(this.loginInfos).subscribe({
            next: (res) => {
                localStorage.setItem('token', res.token);
                this.router.navigate(['/index']);
            },
            error: (err) => {
                if (err.status == 403) {
                    this.toast.error('Usuário ou Senha incorreto');
                }
            },
        });
    } else {
        this.userService.register(this.loginInfos).subscribe({
            next: (res) => {
                this.isRegister = false;
            },
            error: (err) => {
                this.toast.error(err.error);
            },
        });
    }
}


  validarEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  goToRegister() {
    this.isRegister = true;
  }
}
