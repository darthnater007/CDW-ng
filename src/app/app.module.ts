import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// core components
import { NavComponent } from './core/nav/nav.component';

// feature components
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';

// services
import { UserService } from './service/user.service';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { CalendarComponent } from './core/calendar/calendar.component';



@NgModule({
  declarations: [
    AppComponent,
      
    NavComponent,
      
    UserListComponent,
    UserCreateComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CalendarComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
