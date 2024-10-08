import { Component, inject } from '@angular/core';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FooterComponent } from "../../ui/footer/footer.component";
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    SignupFormComponent,
    RouterLink,
    NavBarComponent,
    FooterComponent,
    TopNavComponent,
    FooterComponent
],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  authService = inject(AuthService);
  
  signupForm = new FormGroup({
    usernameForm: new FormControl("", [
      Validators.email,
      Validators.required
    ]),
    passwordForm: new FormControl("", [
      Validators.minLength(6),
      Validators.required
    ])
  })

  async signup()  {
    console.log("call login in login component");
    this.authService.signup(
      this.signupForm.value.usernameForm ?? "", 
      this.signupForm.value.passwordForm ?? ""
    );
    console.log("password: ", this.signupForm.value.usernameForm, "username: " + this.signupForm.value.passwordForm);
  }
}
