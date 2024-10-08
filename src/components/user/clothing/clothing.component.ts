import { Component } from '@angular/core';
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { BannerClothingComponent } from './banner-clothing/banner-clothing.component';
import { OfferClothingUserComponent } from './offer/offer.component';
import { ProductCardsClothingUserComponent } from './product-cards-clothing-user/product-cards-clothing-user.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

@Component({
  selector: 'app-clothing',
  standalone: true,
  imports: [
    TopNavComponent,
    NavBarComponent,
    BannerClothingComponent,
    OfferClothingUserComponent,
    ProductCartComponent,
    ProductCardsClothingUserComponent,
    FooterComponent
  ],
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.css'
})
export class ClothingComponent {

}
