import { Component, OnInit } from '@angular/core';

import { Event } from '../../model/event';

import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
	events : Event[];
	
	title : string =  'Calendar of Upcoming Events';
	// sortBy: string = "Id"; (no pipe yet)
	
constructor(private eventSvc: EventService) { }

  ngOnInit() {
		this.eventSvc.list().subscribe(events => {
			this.events = events;
		});
	  
//	  if(this.sysSvc.data.event.loggedIn){
//			this.event = this.sysSvc.data.event.instance;
//		}else{
//			console.error("Event not logged in.");
//		}  (No Sys Service yet)
  }

remove(eventId: number): void {
    this.eventSvc.remove(eventId).subscribe(res => {
        this.ngOnInit();
    });
}
	
//	setSortBy(column: string): void {
//    this.sortBy = column; (no sortpipe yet)
//  }

}