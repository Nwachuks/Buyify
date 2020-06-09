import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Page } from '../_models/page.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  pageBaseUrl = environment.adminApiUrl + 'pages/';
  categoryBaseUrl = environment.adminApiUrl + 'categories/';

  private pageSource = new BehaviorSubject<Page>({
    _id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content'
  });
  currentPage = this.pageSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllPages() {
    return this.http.get(this.pageBaseUrl);
  }

  getPage(page: Page) {
    this.pageSource.next(page);
  }

  postAddPage(page) {
    return this.http.post(this.pageBaseUrl + 'add-page', page);
  }

  postEditPage(page) {
    return this.http.post(this.pageBaseUrl + 'edit-page', page);
  }

  deletePage(page) {
    return this.http.delete(this.pageBaseUrl + page._id);
  }

  getAllCategories() {
    return this.http.get(this.categoryBaseUrl);
  }

}
