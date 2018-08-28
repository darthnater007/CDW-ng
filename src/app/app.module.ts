import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// core components
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { EventCreateComponent } from './core/calendar/event-create/event-create.component';
import { EventEditComponent } from './core/calendar/event-edit/event-edit.component';

// feature components
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

import { PieceCreateComponent } from './feature/piece/piece-create/piece-create.component';
import { PieceEditComponent } from './feature/piece/piece-edit/piece-edit.component';
import { PublicationListComponent } from './feature/piece/publication-list/publication-list.component';
import { WorkshopListComponent } from './feature/piece/workshop-list/workshop-list.component';


// services and pipes
import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';
import { EventService } from './service/event.service';
import { PieceService } from './service/piece.service';
import { SortPipe } from './pipe/sort.pipe';
import { SortdownPipe } from './pipe/sortdown.pipe';



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
    EventEditComponent,
      
    PieceCreateComponent,
    PieceEditComponent,
    PublicationListComponent,
    WorkshopListComponent,
    SortPipe,
    SortdownPipe,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
    FileUploadModule
  ],
  providers: [
      LoginService,
      UserService,
      EventService,
      PieceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
