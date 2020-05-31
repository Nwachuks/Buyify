import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllPages() {
    return this.http.get(this.baseUrl + 'admin/pages');
  }

  postAddPage(page) {
    return this.http.post(this.baseUrl + 'admin/pages/add-page', page);

  }

}
