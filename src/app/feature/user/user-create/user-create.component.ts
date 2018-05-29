import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
	title: string = "Join Our Group";
    confirmPassword: string = '';
    confirmEmail: string = '';
	resp: any;
	user: User = new User(0, '', '', '', '', '', '', '', '', false);
	
create() {
	console.log('create a user...');
	this.userSvc.create(this.user).subscribe(resp => {
		this.resp = resp;
		this.router.navigate(['/ourwriters']);
		});
}

constructor(private userSvc: UserService, private router: Router) { }

  ngOnInit() {
  }

}