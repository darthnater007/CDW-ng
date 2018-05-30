import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// core components
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { EventCreateComponent } from './core/calendar/event-create/event-create.component';

// feature components
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';


// services
import { UserService } from './service/user.service';
import { EventService } from './service/event.service';



@NgModule({
  declarations: [
    AppComponent,
      
    NavComponent,
      
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CalendarComponent,
      
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    EventCreateComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [
      UserService,
      EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
