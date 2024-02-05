import { Component, EventEmitter, Output } from '@angular/core';
import { LoginRegisterModel } from '../../../../models/loginRegister.model';
import { UserService } from '../../../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css',
})
export class FormUserComponent {
  userInfos: LoginRegisterModel = new LoginRegisterModel();

  showPassword: boolean = false;

  @Output() saveOrCancel: EventEmitter<boolean> = new EventEmitter();

  constructor(private userService: UserService, private toast: ToastrService) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  addUser() {
    const email = this.userInfos.email;
    const password = this.userInfos.password;
    const name = this.userInfos.name;

    if (email == undefined || (email && !this.validarEmail(email))) {
      this.toast.error('Insira um email válido');
      return;
    }

    if (password == undefined || (password && password.length <= 3)) {
      this.toast.error('Senha precisa ter mais que 3 caracteres');
      return;
    }

    this.userService.register(this.userInfos).subscribe({
      next: (res) => {
        this.saveOrCancel.emit(true)
        this.userInfos = new LoginRegisterModel();
      },
      error: (err) => {
        this.toast.error(err.error);
      },
    });
  }

  validarEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  cancelCreation(){
    this.userInfos = new LoginRegisterModel();
    this.saveOrCancel.emit(false);
  }
}
