import { Component } from '@angular/core';
import { AboutContentComponent } from './about-content/about-content.component';
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { FooterComponent } from '../../ui/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TopNavComponent,
    NavBarComponent,
    AboutContentComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
