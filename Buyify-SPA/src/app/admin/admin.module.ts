import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './../nav/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from '../nav/admin/admin-footer/admin-footer.component';
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

import { AlertifyService } from './../_services/alertify.service';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'add-page', component: AddPageComponent },
  { path: 'edit-page', component: EditPageComponent },
  { path: 'pages', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AddPageComponent,
    EditPageComponent
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
    AdminComponent
  ]
})
export class AdminModule { }
