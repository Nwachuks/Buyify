import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';

import { AdminService } from './_services/admin.service';
import { UserService } from './_services/user.service';
import { AlertifyService } from './_services/alertify.service';
import { PagesModule } from './admin/pages/pages.module';
import { CategoriesModule } from './admin/categories/categories.module';

@NgModule({
   declarations: [
    AppComponent
   ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([]),
    NavModule,
    PagesModule,
    CategoriesModule
   ],
   providers: [
    AdminService,
    UserService,
    AlertifyService
   ],
   bootstrap: [
    AppComponent
   ]
})
export class AppModule { }
