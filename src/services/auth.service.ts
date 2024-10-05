import { Injectable } from '@angular/core';
import { getUrl } from '../utils/index.util';
import { UserService } from '../types';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient) { }
  // constructor(private http: HttpClient) {}
  
  async login(username: string, password: string) {
    
    const users: UserService.UserList = (await (await fetch(`${getUrl()}/users`)).json());
    let isOK = false;

    users.forEach((user) => {
      if(user.password === password && user.username == username) {
        this.password = user.password;
        this.username = user.username;
        console.log(`You're logged in with ${this.username} successfully!`);
        this.router.navigateByUrl('/');
        isOK = true;
        return;
      }
    })

    if(!isOK) {
      console.log("Username or password is incorrect!")
    }
  }

  async signup(username: string, password: string) {
    console.log("You are signed up successfully!");
    return this.http.post(`/users`, {
      username,
      password
    })
  }
}
