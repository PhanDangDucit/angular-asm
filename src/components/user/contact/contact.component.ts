import { Component } from '@angular/core';
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { FooterComponent } from '../../ui/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TopNavComponent,
    NavBarComponent,
    ContactContentComponent,
    FooterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
