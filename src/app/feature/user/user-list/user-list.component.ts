import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';

import { UserService } from '../../../service/user.service';

import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users : User[];
	// user : User; (no sys service yet)
	
	title : string =  'Our Writers';
	 sortBy: string = "LastName";
	
constructor(private userSvc: UserService) { }

  ngOnInit() {
		this.userSvc.list().subscribe(users => {
			this.users = users;
		});

  }
	  
//	  if(this.sysSvc.data.user.loggedIn){
//			this.user = this.sysSvc.data.user.instance;
//		}else{
//			console.error("User not logged in.");
//		}  (No Sys Service yet)

remove(userId: number): void {
    this.userSvc.remove(userId).subscribe(res => {
        this.ngOnInit();
    });
}
	
setSortBy(column: string): void {
    this.sortBy = column;
}

}