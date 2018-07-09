import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Event } from '../../../model/event';
import { User } from '../../../model/user';

import { EventService } from '../../../service/event.service';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
	title: string = "Edit An Event";
	
	id: string;
	resp: any;
	
	event: Event = new Event(0, '', '', '', '', null, null);
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
	

constructor(private eventSvc: EventService, private router: Router, private route: ActivatedRoute, private loginSvc: LoginService) { }

  ngOnInit() {
	this.route.params.subscribe(parms => this.id = parms['id']);
	this.eventSvc.get(this.id).subscribe(events => {
		this.event = events.length > 0 ? events[0] : null;
		});
      
    if(this.loginSvc.data.user.loggedIn){
        this.loggedIn = this.loginSvc.data.user.instance;
    } 
  }
	
change() {
	this.eventSvc.change(this.event).subscribe(resp => {
		this.resp = resp;
		this.router.navigate(['/calendar']);
		});
}

}