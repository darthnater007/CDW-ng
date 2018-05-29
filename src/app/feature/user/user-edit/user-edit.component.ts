import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../service/user.service';

import { User } from '../../../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
	title: string = "Edit Writer";
	
	id: string;
    confirmPassword: string = '';
    confirmEmail: string = '';
	resp: any;
	
	user: User = new User(0, '', '', '', '', '', '', '', '', false);
	

constructor(private userSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	this.route.params.subscribe(parms => this.id = parms['id']);
	this.userSvc.get(this.id).subscribe(users => {
		this.user = users.length > 0 ? users[0] : null;
        this.confirmPassword = this.user.Password;
        this.confirmEmail = this.user.Email;
		});
  }
	
change() {
	this.userSvc.change(this.user).subscribe(resp => {
		this.resp = resp;
		this.router.navigate(['/ourwriters']);
		});
}

}