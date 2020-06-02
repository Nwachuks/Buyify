import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './../nav/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from '../nav/admin/admin-footer/admin-footer.component';
import { PagesComponent } from './pages/pages.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CategoriesComponent } from './categories/categories/categories.component';

import { AlertifyService } from './../_services/alertify.service';

const adminRoutes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent },
  { path: 'pages/add-page', component: AddPageComponent },
  { path: 'pages/edit-page', component: EditPageComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: '**', redirectTo: 'pages', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    PagesComponent,
    AddPageComponent,
    EditPageComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [
    AlertifyService
  ],
  exports: [
    PagesComponent
  ]
})
export class AdminModule { }
