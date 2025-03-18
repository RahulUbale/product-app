import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const productId = Number(params.get('id'));
        return this.productService.getProduct(productId);
      })
    );
  }
  onBuyNowClick(product: any): void {
    const mailtoLink = `mailto:rahul.ubale19@gmail.com?subject=I%20like%20this%20product%20-%20How%20to%20buy%20it%20(Product%20ID:%20${product.id}%20Product%20Name:%20${product.title})`;
    window.location.href = mailtoLink;
  }
}
