import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
