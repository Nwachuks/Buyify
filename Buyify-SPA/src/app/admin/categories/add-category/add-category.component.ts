import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { AdminService } from 'src/app/_services/admin.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  model: any = {};
  category: Category;

  constructor(private adminService: AdminService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  addCategory(form: NgForm) {
    if (form.valid) {
      this.category = Object.assign({}, form.value);
      this.adminService.postAddCategory(this.category).subscribe(() => {
        this.alertify.success('Category added sucessfully');
      }, error => {
        this.alertify.error(error.error.message);
      }, () => {
        form.reset();
        this.router.navigate(['/admin/categories']);
      });
    }
  }

}
