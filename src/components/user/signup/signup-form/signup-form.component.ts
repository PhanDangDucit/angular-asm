import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  @Input() signupForm!: FormGroup<{
    usernameForm: FormControl<string | null>;
    passwordForm: FormControl<string | null>;
  }>;

  /**
   * Received one thing, dispatch that one
   * - input event name is the same the output event name
   */
  @Output() signupEvent = new EventEmitter<FormGroup<{
    usernameForm: FormControl<string | null>;
    passwordForm: FormControl<string | null>;
  }>>()

  signup() {
    console.log("User logined by UI!");
    // console.log("this.loginForm.value.passwordForm: ", this.loginForm.value.passwordForm)
    // console.log("this.loginForm.value.usernameForm: ", this.loginForm.value.usernameForm)
    this.signupEvent.emit(this.signupForm);
  }

  get usernameForm() {
    return this.signupForm.get("usernameForm");
  }
  
  get passwordForm() {
    return this.signupForm.get("passwordForm");
  }
}
