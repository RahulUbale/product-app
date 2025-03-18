import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // Removed RouterLink
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  onViewDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
