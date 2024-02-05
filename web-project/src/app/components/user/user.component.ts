import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  listUsers: UserModel[] = []

  isAdduser: boolean = false

  constructor(private userService: UserService, private toast: ToastrService){}

  ngOnInit(): void {
    this.searchUsers()
  }

  searchUsers(){
    this.userService.searchUsers().subscribe({
      next: res =>{
        this.listUsers = res
      },
      error: err =>{
        this.toast.error(err.message);
      }
    })
  }

  saveOrCancel(state: boolean){
    if(state){
      this.searchUsers()
      this.isAdduser = false
    }else{
      this.isAdduser = false
    }
  }
}
