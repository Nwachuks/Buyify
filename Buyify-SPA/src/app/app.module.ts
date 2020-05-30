import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './nav/user/user-header/user-header.component';
import { UserFooterComponent } from './nav/user/user-footer/user-footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { UserService } from './_services/user.service';

@NgModule({
   declarations: [
      AppComponent,
      UserHeaderComponent,
      UserFooterComponent,
      HomeComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
