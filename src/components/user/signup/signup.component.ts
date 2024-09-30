import { Component } from '@angular/core';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    SignupFormComponent, 
    RouterLink,
    NavBarComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
