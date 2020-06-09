import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Page } from '../_models/page.model';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../_models/category.model';

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

  private categorySource = new BehaviorSubject<Category>({
    _id: 'id',
    title: 'title',
    slug: 'slug'
  });
  currentCategory = this.categorySource.asObservable();

  constructor(private http: HttpClient) { }

  getAllPages() {
    return this.http.get(this.pageBaseUrl);
  }

  postAddPage(page) {
    return this.http.post(this.pageBaseUrl + 'add-page', page);
  }

  getPage(page: Page) {
    this.pageSource.next(page);
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

  postAddCategory(category) {
    return this.http.post(this.categoryBaseUrl + 'add-category', category);
  }

  postEditCategory(category) {
    return this.http.post(this.categoryBaseUrl + 'edit-category', category);
  }

  getCategory(category) {
    this.categorySource.next(category);
  }

  deleteCategory(category) {
    return this.http.delete(this.categoryBaseUrl + category._id);
  }

}
