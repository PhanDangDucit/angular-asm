import { Component, inject } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-cart',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  productService = inject(ProductService);
  products!: Observable<Array<TProduct>>;

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.products = this.productService.getAllProducts();
  }
}
