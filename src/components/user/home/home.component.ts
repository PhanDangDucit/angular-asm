import { Component } from '@angular/core';
import { TopCardsComponent } from './top-cards/top-cards.component';
import { ProductComponent } from './product/product.component';
import { OfferComponent } from './offer/offer.component';
import { BannerComponent } from './banner/banner.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { HeaderComponent } from '../../ui/header/header.component';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopCardsComponent, 
    TopNavComponent, 
    ProductComponent, 
    OfferComponent,
    BannerComponent,
    ProductCartComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    HomeContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
