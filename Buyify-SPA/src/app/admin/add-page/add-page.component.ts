import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Page } from './../../_models/page.model';
import { AdminService } from './../../_services/admin.service';
import { AlertifyService } from './../../_services/alertify.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  model: any = {};
  page: Page;

  constructor(private adminService: AdminService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  addPage(form: NgForm) {
    if (form.valid) {
      // Clone form object to page model
      this.page = Object.assign({}, form.value);
      // if (this.page.title === undefined) {
      //   this.page.title = '';
      // }
      // if (this.page.content === undefined) {
      //   this.page.content = '';
      // }
      // if (this.page.slug === undefined) {
      //   this.page.slug = '';
      // }
      console.log(this.page);
      this.adminService.postAddPage(this.page).subscribe(() => {
        this.alertify.success('Page added');
      }, (error) => {
        this.alertify.warning(error.error.message);
      }, () => {
        form.reset();
        this.router.navigate(['']);
      });
    }
  }

}
