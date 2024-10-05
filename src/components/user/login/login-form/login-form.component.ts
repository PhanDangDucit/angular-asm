import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Input() loginForm!: FormGroup<{
    usernameForm: FormControl<string | null>;
    passwordForm: FormControl<string | null>;
  }>;

  /**
   * Received one thing, dispatch that one
   * - input event name is the same the output event name
   */
  @Output() loginEvent = new EventEmitter<FormGroup<{
    usernameForm: FormControl<string | null>;
    passwordForm: FormControl<string | null>;
  }>>()

  login() {
    console.log("User logined by UI!");
    // console.log("this.loginForm.value.passwordForm: ", this.loginForm.value.passwordForm)
    // console.log("this.loginForm.value.usernameForm: ", this.loginForm.value.usernameForm)
    this.loginEvent.emit(this.loginForm);
  }

  get usernameForm() {
    return this.loginForm.get("usernameForm");
  }
  
  get passswordForm() {
    return this.loginForm.get("passwordForm");
  }
}