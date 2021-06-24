import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  isAuthenticated!: boolean;
  constructor(private http: HttpClient) { }
  
  ValidaeUser(): boolean {
    if (localStorage.getItem("login") != null) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

  GetLoginData(username: string, password: string) {
    let url = 'http://localhost:5000/api/user/login?username=' + username + '&password=' + password;
    let loginParam = new HttpParams();
    loginParam.set('username', username);
    loginParam.set('password', password);
    return this.http.get(url);
  }
  
}
