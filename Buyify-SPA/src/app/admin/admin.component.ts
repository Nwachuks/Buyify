import { Component, OnInit } from '@angular/core';
import { Page } from '../_models/page.model';
import { AdminService } from './../_services/admin.service';
import { AlertifyService } from './../_services/alertify.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pages: Page[];

  constructor(private adminService: AdminService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.adminService.getAllPages().subscribe((pages) => {
      this.pages = pages as Page[];
    }, (error) => {
      this.alertify.error(error);
    });
  }

}
