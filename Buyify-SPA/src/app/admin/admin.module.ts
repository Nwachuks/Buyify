import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AdminHeaderComponent } from './../nav/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from '../nav/admin/admin-footer/admin-footer.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

import { AlertifyService } from './../_services/alertify.service';

const adminRoutes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'add-page', component: AddPageComponent },
  { path: 'edit-page', component: EditPageComponent },
  { path: 'pages', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    PagesComponent,
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
    PagesComponent
  ]
})
export class AdminModule { }
