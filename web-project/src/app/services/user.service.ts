import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRegisterModel } from "../models/loginRegister.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService{

  constructor(private http: HttpClient){}

  private baseUrl = 'http://localhost:8080/';

  login(loginRegisterModel: LoginRegisterModel): Observable<any>{
    return this.http.post(`${this.baseUrl}auth/login`, loginRegisterModel)
  }

  register(loginRegisterModel: LoginRegisterModel): Observable<any>{
    return this.http.post(`${this.baseUrl}user/register`, loginRegisterModel)
  }
}
