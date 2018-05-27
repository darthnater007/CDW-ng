import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//core

//feature
import { UserListComponent } from './feature/user/user-list/user-list.component';
import {UserCreateComponent } from './feature/user/user-create/user-create.component';

const routes: Routes = [
    { path:'', redirectTo:'/', pathMatch: 'full' },
    
    { path: 'ourwriters' , component: UserListComponent },
    { path: 'create/writer', component: UserCreateComponent },
    
    { path:'**', component: UserListComponent } //change to login later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
