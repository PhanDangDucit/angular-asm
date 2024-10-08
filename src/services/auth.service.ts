import { inject, Injectable } from '@angular/core';
import { getUrl } from '../utils/index.util';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartService } from './cart-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string = "";
  password: string = "";
  userId: string = "";

  constructor(private router: Router, private http: HttpClient) { }
  
  async login(username: string, password: string) {
    
    const users: UserList = (await (await fetch(`${getUrl()}/users`)).json());
    let isOK = false;

    users.forEach((user) => {
      if(user.password === password && user.username == username) {
        this.password = user.password;
        this.username = user.username;
        this.userId = user.id;
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
    this.http.post(`${getUrl()}/users`, {
      username,
      password,
      role: "user",
      id: String(Math.floor(Math.random() * 100 + 2))
    }).subscribe(r => console.log(r));
    this.router.navigateByUrl('/signin');
  }

  signout() {
    this.username = "",
    this.password = "";
    this.router.navigateByUrl('/');
    console.log("You are signed out!");
  }

  isCheckAuth() {
    if(this.username.length == 0) {
      this.router.navigateByUrl('/');
    }
  }
}
