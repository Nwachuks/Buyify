import { AlertifyService } from '../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.model';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private adminService: AdminService, private alertify: AlertifyService) { }

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

}
