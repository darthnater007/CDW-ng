import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../../../model/event';
import { User } from '../../../model/user';

import { EventService } from '../../../service/event.service';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
	title: string = "Create An Event";
	resp: any;
    
	event: Event = new Event(0, '', '', '', '', null, null);
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
    
	
create() {
	console.log('create a event...');
	this.eventSvc.create(this.event).subscribe(resp => {
        console.log(this.event);
		this.resp = resp;
		this.router.navigate(['/calendar']);
		});
}

constructor(private eventSvc: EventService, private router: Router, private loginSvc: LoginService) { }

  ngOnInit() {
      if(this.loginSvc.data.user.loggedIn){
        this.loggedIn = this.loginSvc.data.user.instance;
    } 
  }

}