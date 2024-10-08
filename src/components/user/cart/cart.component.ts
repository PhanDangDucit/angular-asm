import { Component, inject } from '@angular/core';
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { CartService } from '../../../services/cart-service.service';
import { AuthService } from '../../../services/auth.service';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TopNavComponent,
    NavBarComponent,
    PaymentComponent,
    FooterComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  authService = inject(AuthService);
  cartService = inject(CartService);
  products: Array<TProduct> = [];
  cartItems: Array<CartItems> = [];
  carts: Array<CartProduct> = [];
  totalQuantity: number = 0;
  totalPrice: string = "";
  subTotalPrice: string = "";
  totalTaxes: string = "";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.isCheckAuth();
    this.carts = this.getCartProducts();
    this.totalQuantity = this.getTotalQuantity();
    this.subTotalPrice = "$" + this.getSubTotalPrice().toFixed(2);
    this.totalTaxes = "$" + (this.getTotalTaxes()).toFixed(2);
    this.totalPrice = "$" + this.getTotalPrice().toFixed(2);
    console.log("carts::", this.carts);
  }

    // store to a new data structure
  getCartProducts() {
    console.log("cartItemOfUser::", this.cartService.cartItemOfUser);
    console.log("productsInCartOfUser::", this.cartService.productsInCartOfUser);
    
    let carts: Array<CartProduct> = [];
    this.cartService.cartItemOfUser.forEach((item) => {
      this.cartService.productsInCartOfUser.forEach((product) => {
        if(item.product_id === product.id) {
          carts =  [...carts, {
            id: item.id,
            user_id: item.user_id,
            product_id: item.product_id,
            product_name: product.product_name,
            product_image: product.product_image,
            sumary_description: product.sumary_description,
            quantity: item.quantity,
            price: product.price
          }];
        }
      })
    })
    return carts;
  }
  getTotalQuantity(): number {
    return this.carts.reduce((total, item) => total + Number(item.quantity), 0);
  }
  
  getSubTotalPrice() {
    return this.carts.reduce((total, item) => total + Number(item.price.slice(1)), 0);
  }

  getTotalTaxes() {
    return (this.getSubTotalPrice() + 20) * 0.1;
  }

  getTotalPrice() {
    return this.getSubTotalPrice() + 20 + this.getTotalTaxes();
  }
}
