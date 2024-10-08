import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../../ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../../ui/footer/footer.component";
import { TopNavComponent } from '../../ui/top-nav/top-nav.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { AsyncPipe } from '@angular/common';
import { CartService } from '../../../services/cart-service.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    NavBarComponent, 
    FooterComponent,
    TopNavComponent,
    AsyncPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService =  inject(ProductService);
  cartService = inject(CartService);
  authService = inject(AuthService);

  productId = "0";
  constructor() {
    this.productId = this.route.snapshot.params['id'];
  }
  product!: TProduct;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProduct();
  }
  
  getProduct() {
    return this.productService.getProductById(this.productId).subscribe((res) => {
      console.log(res);
      this.product = res;
    });
  }

  addToCart(productId: string) {
    const isAuth = this.authService.username.length > 0;
    if(isAuth) {
      console.log("Add to cart");
      this.cartService.addToCart(productId);
    } else {
      console.log("You must login!");
    }
  }
}
