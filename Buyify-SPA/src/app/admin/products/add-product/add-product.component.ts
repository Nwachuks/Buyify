import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './../../../_models/product.model';
import { Category } from './../../../_models/category.model';
import { AdminService } from './../../../_services/admin.service';
import { AlertifyService } from './../../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  model: any = {};
  product: Product;
  categories: Category[];

  constructor(private adminService: AdminService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    // Get all product categories to select for product
    this.adminService.getAllCategories().subscribe((categories) => {
      this.categories = categories as Category[];
    }, (error) => {
      this.alertify.warning(error);
    });
  }

  addProduct(form: NgForm) {
    if (form.valid) {
      this.product = Object.assign({}, form.value);
      this.adminService.postAddProduct(this.product).subscribe(() => {
        this.alertify.success('Product added successfully');
      }, (error) => {
        this.alertify.error(error.error.message);
      }, () => {
        form.reset();
        this.router.navigate(['/admin/products']);
      });
    }
    console.log(this.product);
  }

}
