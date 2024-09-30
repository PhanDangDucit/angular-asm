import { Component } from '@angular/core';
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { FooterComponent } from '../../ui/footer/footer.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TopNavComponent,
    NavBarComponent,
    
    FooterComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
