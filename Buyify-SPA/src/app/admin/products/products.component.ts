import { Component, OnInit } from '@angular/core';
import { Product } from '../../_models/product.model';
import { AdminService } from 'src/app/_services/admin.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  count: 0;
  products: Product[];

  constructor(private adminService: AdminService, private alerify: AlertifyService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.adminService.getAllProducts().subscribe((result: any) => {
      this.count = result.count;
      this.products = result.products as Product[];
    }, (error) => {
      this.alerify.error(error.error.msg);
    });
  }

}
