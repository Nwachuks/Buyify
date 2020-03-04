import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddPageComponent } from './add-page/add-page.component';
import { AdminHeaderComponent } from './../nav/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './../nav/admin/admin-footer/admin-footer.component';

const adminRoutes: Routes = [
  { path: '/add-page', component: AddPageComponent }
];

@NgModule({
  declarations: [
    AdminComponent,
    AddPageComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
