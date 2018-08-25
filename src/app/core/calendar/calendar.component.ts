import { Component, OnInit } from '@angular/core';

import { Event } from '../../model/event';
import { User } from '../../model/user';


import { EventService } from '../../service/event.service';
import { LoginService } from '../../service/login.service';

import { SortdownPipe } from '../../pipe/sortdown.pipe';

@Component({
  selector: 'app-event-list',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
	events : Event[];
	
	title : string =  'Calendar of Upcoming Events';
	sortBy: string = "EventStart";
    
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
	
constructor(private eventSvc: EventService, private loginSvc: LoginService) { }

  ngOnInit() {
      if(this.loginSvc.data.user.loggedIn){
          this.loggedIn = this.loginSvc.data.user.instance;
    } 
		this.eventSvc.list().subscribe(events => {
			this.events = events;
		});
  }

remove(eventId: number): void {
    this.eventSvc.remove(eventId).subscribe(res => {
        this.ngOnInit();
    });
}
	
	setSortBy(column: string): void {
    this.sortBy = column;
  }

}