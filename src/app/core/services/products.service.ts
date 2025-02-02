import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';
export interface Product {
  id: string;
  title: string;
  sku: string;
  description: string;
  price: number;
  oldPrice: number;
  keyFeatures: string[];
  images: string[];
}
@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private readonly httpClient: HttpClient) {}
  public async getProduct(productId: number) {
    return this.httpClient.get(`assets/database/products.json`).pipe(
      switchMap((products: any) => products), // Converts the array into a stream of individual items
      first((product: any) => product.id === productId) // Picks the first matching product
    );
  }
}
