import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'contact-content',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.css'
})
export class ContactContentComponent {
  contactInfo = {
    username: "",
    email: "",
    phone: "",
    message: ""
  }
  contactForm = new FormGroup({
    usernameForm: new FormControl("", [
      Validators.email,
      Validators.required
    ]),
    emailForm: new FormControl("", [
      Validators.minLength(6),
      Validators.required
    ]),
    phoneForm: new FormControl(""),
    messageForm: new FormControl("")
  })
  sentMessage() {
    this.contactInfo = {
      username: this.contactForm.value.usernameForm ?? "",
      email: this.contactForm.value.emailForm ??"",
      phone: this.contactForm.value.phoneForm ?? "",
      message: this.contactForm.value.messageForm ?? ""
    }
    console.log("message info::", this.contactInfo);
    this.contactForm.reset();
  }
}
