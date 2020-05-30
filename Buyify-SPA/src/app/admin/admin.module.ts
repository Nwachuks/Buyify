import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './../nav/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from '../nav/admin/admin-footer/admin-footer.component';
import { AddPageComponent } from './add-page/add-page.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'add-page', component: AddPageComponent }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AddPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
