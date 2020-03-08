import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddPageComponent } from './add-page/add-page.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'add-page', component: AddPageComponent }
];

@NgModule({
  declarations: [
    AdminComponent,
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
