import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//core
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { ContactComponent } from './core/contact/contact.component';

//feature
import { UserListComponent } from './feature/user/user-list/user-list.component';
import {UserCreateComponent } from './feature/user/user-create/user-create.component';

const routes: Routes = [
    { path:'', redirectTo:'/', pathMatch: 'full' },
    
    // core
    { path:'home', component: HomeComponent },
    { path:'about', component: AboutComponent },
    { path:'calendar', component: CalendarComponent },
    { path:'contact', component: ContactComponent },
    
    //feature
    { path: 'ourwriters' , component: UserListComponent },
    { path: 'create/writer', component: UserCreateComponent },
    
    { path:'**', component: UserListComponent } //change to login later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
