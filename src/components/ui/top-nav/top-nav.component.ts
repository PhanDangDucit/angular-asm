import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart-service.service';

@Component({
  selector: 'top-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  cartService = inject(CartService);
  authService = inject(AuthService);
  auth!: Partial<User>;
  productCartQuantity: number = 0;
  constructor() {
    this.auth = {
      username: this.authService.username,
      password: this.authService.password
    };
  }
  isAuth: boolean = false;
  checkAuth() {
    this.isAuth = this.authService.username.length > 0;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkAuth();
    this.cartService.getQuantity();
    this.productCartQuantity = this.cartService.productQuantity;
  }
  logout() {
    this.authService.signout();
    this.checkAuth();
  }
  
}