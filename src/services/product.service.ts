import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getUrl } from '../utils/index.util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProducts: TProduct[] = [];
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Array<TProduct>>(`${getUrl()}/products`)
  }

  getProductById(id: string): Observable<TProduct> {
    return this.http.get<TProduct>(`${getUrl()}/products/${id}`);
  }
}
