import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Page } from '../_models/page.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl + 'admin/pages/';

  private pageSource = new BehaviorSubject<Page>({
    _id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content'
  });
  currentPage = this.pageSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllPages() {
    return this.http.get(this.baseUrl);
  }

  // getPage(page: Page) {
  //   return this.http.get(this.baseUrl + 'admin/pages/edit-page/' + page.slug);
  // }

  getPage(page: Page) {
    this.pageSource.next(page);
  }

  postAddPage(page) {
    return this.http.post(this.baseUrl + 'add-page', page);
  }

  postEditPage(page) {
    return this.http.post(this.baseUrl + 'edit-page', page);
  }

}
