import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product!:Product
  constructor(
   private readonly productsService:ProductsService, private _activeRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const productId=this._activeRoute.snapshot.paramMap.get('id');
   (await this.productsService.getProduct(Number(productId))).subscribe((product:any)=>{this.product=product})
  }
}
