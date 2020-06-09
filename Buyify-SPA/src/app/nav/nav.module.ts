import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AdminHeaderComponent,
    UserHeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdminHeaderComponent,
    UserHeaderComponent,
    FooterComponent
  ]
})

export class NavModule { }
