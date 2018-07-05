import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';

import { UserService } from '../../../service/user.service';
import { LoginService } from '../../../service/login.service';

import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users : User[];
	loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
	
	title : string =  'Our Writers';
	 sortBy: string = "LastName";
	
constructor(private userSvc: UserService, private loginSvc: LoginService) { }

  ngOnInit() {
		this.userSvc.list().subscribe(users => {
			this.users = users;
		});
      
      if(this.loginSvc.data.user.loggedIn){
			this.loggedIn = this.loginSvc.data.user.instance;
		}

  }

remove(userId: number): void {
    this.userSvc.remove(userId).subscribe(res => {
        this.ngOnInit();
    });
}
	
setSortBy(column: string): void {
    this.sortBy = column;
}

}