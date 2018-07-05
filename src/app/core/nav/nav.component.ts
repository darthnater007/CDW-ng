import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Nav } from '../../model/nav';
import { User } from '../../model/user';
import { Login } from '../../model/login';

import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    
    loginError: string = '';
    
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
    loginToken: Login = new Login('','');

navItems: Nav[] = [
	new Nav('Home', '/home', 'Go to the home page'),
	new Nav('About Us', '/about', 'Who are we?'),
    new Nav('Our Writers', '/ourwriters', 'Meet our writers'),
	new Nav('Publications', '/publications', 'A list of our published works'),
	new Nav('Workshop', '/workshop', 'A place for members to upload pieces for workshop'),
	new Nav('Calendar', '/calendar', 'What we are up to'),
	new Nav('Contact Us', '/contact', 'Need to get a hold of our administrators directly?  Go here!')
];
    
constructor(private router: Router, private userSvc : UserService, private loginSvc : LoginService) { }

  ngOnInit() {
  }

    authenticate() {
        this.userSvc.login(this.loginToken)
			.subscribe(users => {
				if(users.length > 0) {
					this.loggedIn = users[0];
					this.loginSvc.data.user.instance = this.loggedIn;
					this.loginSvc.data.user.loggedIn = true;
                    this.router.navigate(['/home']);
                    
				}
				else {
					this.loginError = "Invalid Username/Password combo.  Retry";
				}
			})
    }
    
    logOut(){
        this.loginSvc.data.user.instance = null;
        this.loginSvc.data.user.loggedIn = false;
        this.loggedIn.Id = 0;
        this.loginToken.UserName = '';
        this.loginToken.Password = '';
        this.router.navigate(['/home']);
    }

}

