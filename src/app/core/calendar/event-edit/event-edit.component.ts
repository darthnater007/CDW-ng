import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventService } from '../../../service/event.service';

import { Event } from '../../../model/event';

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
	

constructor(private eventSvc: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	this.route.params.subscribe(parms => this.id = parms['id']);
	this.eventSvc.get(this.id).subscribe(events => {
		this.event = events.length > 0 ? events[0] : null;
		});
  }
	
change() {
	this.eventSvc.change(this.event).subscribe(resp => {
		this.resp = resp;
		this.router.navigate(['/calendar']);
		});
}

}