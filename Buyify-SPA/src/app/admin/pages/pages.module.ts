import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  declarations: [
    PagesComponent,
    AddPageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ]
})

export class PagesModule { }
