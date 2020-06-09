import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '../../_models/page.model';
import { AdminService } from '../../_services/admin.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
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

  getPage(page: Page) {
    this.adminService.getPage(page);
    this.router.navigate(['/pages/edit-page']);
  }

  deletePage(page: Page) {
    if (confirm('Do you want to delete this page?')) {
      this.adminService.deletePage(page).subscribe((res) => {
        // console.log(res);
        this.alertify.success('Page deleted');
      }, (error) => {
        this.alertify.warning(error.error.msg);
      }, () => {
        this.getPages();
      });
    }
  }

}
