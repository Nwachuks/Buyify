import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './nav/user/user-header/user-header.component';
import { UserFooterComponent } from './nav/user/user-footer/user-footer.component';
import { AdminHeaderComponent } from './nav/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './nav/admin/admin-footer/admin-footer.component';

import { UserService } from './_services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
