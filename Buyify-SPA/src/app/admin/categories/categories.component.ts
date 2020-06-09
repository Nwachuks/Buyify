import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { AlertifyService } from '../../_services/alertify.service';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category: Category;
  categories: Category[];

  constructor(private adminService: AdminService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.adminService.getAllCategories().subscribe((categories) => {
      this.categories = categories as Category[];
    }, (error) => {
      this.alertify.warning(error);
    });
  }

  getCategory(category) {
    this.adminService.getCategory(category);
    this.router.navigate(['/admin/categories/edit-category']);
  }

}
