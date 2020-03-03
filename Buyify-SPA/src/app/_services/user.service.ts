import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPages() {
    return this.http.get(this.baseUrl, { responseType: 'text' });
  }
}
