import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { AdminService } from 'src/app/_services/admin.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category: Category;

  constructor(private adminService: AdminService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.adminService.currentCategory.subscribe(category => this.category = category);
  }

  editCategory(form: NgForm) {
    if (form.valid) {
      this.adminService.postEditCategory(this.category).subscribe(() => {
        this.alertify.success('Category edited');
      }, (error) => {
        this.alertify.warning(error.error.message);
      });
    }
  }

}
