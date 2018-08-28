import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//core
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { ContactComponent } from './core/contact/contact.component';

//feature
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

import { EventCreateComponent } from './core/calendar/event-create/event-create.component';
import { EventEditComponent } from './core/calendar/event-edit/event-edit.component';

import { PublicationListComponent } from './feature/piece/publication-list/publication-list.component';
import { WorkshopListComponent } from './feature/piece/workshop-list/workshop-list.component';
import { PieceCreateComponent } from './feature/piece/piece-create/piece-create.component';
import { PieceEditComponent } from './feature/piece/piece-edit/piece-edit.component';



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
    { path: 'edit/writer/:id', component: UserEditComponent},
    
    { path: 'create/event', component: EventCreateComponent },
    { path: 'edit/event/:id', component: EventEditComponent },
    
    { path: 'publications', component: PublicationListComponent },
    { path: 'workshop', component: WorkshopListComponent },
    { path: 'create/piece/:type', component: PieceCreateComponent },
    { path: 'edit/piece/:id', component: PieceEditComponent },
    
    { path:'**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
