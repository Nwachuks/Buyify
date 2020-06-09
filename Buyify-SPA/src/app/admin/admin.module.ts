import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';

import { AlertifyService } from './../_services/alertify.service';

const adminRoutes: Routes = [
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: 'admin', component: AdminComponent },
  { path: 'admin/pages', component: PagesComponent },
  { path: 'admin/pages/add-page', component: AddPageComponent },
  { path: 'admin/pages/edit-page', component: EditPageComponent },
  { path: 'admin/categories', component: CategoriesComponent},
  { path: 'admin/categories/add-category', component: AddCategoryComponent },
  { path: '**', redirectTo: 'admin/pages', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PagesComponent,
    AddPageComponent,
    EditPageComponent,
    CategoriesComponent,
    AddCategoryComponent
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
    RouterModule
  ]
})
export class AdminModule { }
