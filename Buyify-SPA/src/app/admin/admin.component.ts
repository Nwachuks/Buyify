import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '../_models/page.model';
import { AdminService } from './../_services/admin.service';
import { AlertifyService } from './../_services/alertify.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  page: Page;
  pages: Page[];

  constructor(private adminService: AdminService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.getPages();
    this.adminService.currentPage.subscribe(page => this.page = page);
  }

  getPages() {
    this.adminService.getAllPages().subscribe((pages) => {
      this.pages = pages as Page[];
    }, (error) => {
      this.alertify.error(error);
    });
  }

  // getPage(page: Page) {
  //   this.adminService.getPage(page).subscribe((res) => {
  //     console.log(res as Page);
  //   }, (error) => {
  //     this.alertify.error(error);
  //     console.log(error);
  //   });
  // }

  getPage(page: Page) {
    this.adminService.getPage(page);
    this.router.navigate(['/edit-page']);
  }

}
