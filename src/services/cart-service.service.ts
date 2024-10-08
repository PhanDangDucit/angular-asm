import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { getUrl } from '../utils/index.util';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productQuantity: number = 0;
  allCartItems: Array<CartItems> = []; // all cart items
  cartItemOfUser: Array<CartItems> = []; // all cart items of user
  allProducts: Array<TProduct> = []; // all products
  productsInCartOfUser: Array<TProduct> = []; // products in cart of user
  authService = inject(AuthService);
  productService = inject(ProductService);
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getQuantity();
    console.log("cart service");
  }

  // get products in cart of user
  getAllCartProducts() {
    return this.allCartItems.filter(item => {
      const products = this.allProducts.find(product => product.id == item.product_id);
      console.log(products);
    });
  }

  // get quantity
  getQuantity() {
    this.getAllCartItems();
    this.getAllProducts();
    this.getAllCartItemsOfUser();
    this.productsInCartOfUser = this.getProductInCartOfUser();
    this.productQuantity = this.getTotalQuantity();
    return this.productQuantity;
  }

  // get products in the cart of user
  getProductInCartOfUser() {
    let products:Array<TProduct> = [];
    this.getAllCartItemsOfUser().forEach(item => {
      const productMatch = this.allProducts.find(product => product.id === item.product_id);
      if(productMatch) {
        products.push(productMatch);
      }
    });
    return products;
  }

  // get all cart items
  getAllCartItems() {
    return this.http.get<Array<CartItems>>(`${getUrl()}/carts`)
      .subscribe(res => this.allCartItems = res);
  }

  // get all products in the cart of user
  getAllCartItemsOfUser() {
    this.cartItemOfUser = this.allCartItems.filter(item => item.user_id === this.authService.userId);
    return this.cartItemOfUser;
  }

  // get all products
  getAllProducts() {
    return this.productService.getAllProducts().subscribe(res => this.allProducts = res);
  }

  // check cart item in cart to add to cart
  checkCartItem(productId: string) {
    return this.cartItemOfUser.find(item => {
      if(item.product_id === productId) {
        return true;
      } else {
        return false;
      }
    });
  }

  // add a new product
  async addToCart(productId: string){
    const isExisting = this.checkCartItem(productId);
    console.log("isExisting: ", isExisting);
    if(!isExisting) {
      console.log("call when !isExisting");
      this.http.post(`${getUrl()}/carts`, {
        id: String(Math.floor(Math.random()*1000)),
        user_id: this.authService.userId,
        product_id: productId,
        quantity: 1
      }).subscribe((data) => {
        this.cartItemOfUser.push(data as CartItems);
        console.log("add to cart -> data:: ", data);
        this.getQuantity();
      });
    } else {
      console.log("call when isExisting")
      this.cartItemOfUser.forEach(item => {
        if(item.product_id === productId) {
          console.log("productId::", productId);
          this.http.put(`${getUrl()}/carts/${item.id}`,  {
            id: item.id,
            user_id: item.user_id,
            product_id: item.product_id,
            quantity: Number(item.quantity) + 1
          }).subscribe(data => {
            this.cartItemOfUser = this.cartItemOfUser.map(item => {
              this.getQuantity();
              if(item.product_id == productId) {
                return {
                  id: item.id,
                  user_id: item.user_id,
                  product_id: item.product_id,
                  quantity: Number(item.quantity) + 1
                }
              } else {
                return {
                  id: item.id,
                  user_id: item.user_id,
                  product_id: item.product_id,
                  quantity: Number(item.quantity) + 1
                }
              }
            })
          })
        }
      })
    }
    console.log("cart item of user: ", this.cartItemOfUser);
  }

  getTotalQuantity(): number {
    return this.cartItemOfUser.reduce((total, item) => total + Number(item.quantity), 0);
  }
}
