import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavBarComponent,
    LoginFormComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  loginForm = new FormGroup({
    usernameForm: new FormControl("", [
      Validators.email,
      Validators.required
    ]),
    passwordForm: new FormControl("", [
      Validators.minLength(6),
      Validators.required
    ])
  })

  async login()  {
    console.log("call login in login component")
    this.authService.login(
      this.loginForm.value.usernameForm ?? "", 
      this.loginForm.value.passwordForm ?? ""
    );
    console.log("password: ", this.loginForm.value.usernameForm, "username: " + this.loginForm.value.passwordForm);
  }
}
