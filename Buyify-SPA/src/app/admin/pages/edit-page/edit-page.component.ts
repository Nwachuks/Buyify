import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Page } from 'src/app/_models/page.model';
import { AdminService } from '../../../_services/admin.service';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  page: Page;

  constructor(private adminService: AdminService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.adminService.currentPage.subscribe(page => this.page = page);
  }

  editPage(form: NgForm) {
    if (form.valid) {
      this.adminService.postEditPage(this.page).subscribe(() => {
        this.alertify.success('Page edited');
      }, (error) => {
        this.alertify.warning(error.error.message);
      });
    }
  }

}
