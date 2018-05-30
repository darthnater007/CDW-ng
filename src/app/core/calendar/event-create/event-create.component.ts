import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../../model/event';
import { EventService } from '../../../service/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
	title: string = "Create An Event";
    confirmPassword: string = '';
    confirmEmail: string = '';
	resp: any;
	event: Event = new Event(0, '', '', '', '', null, null);
	
create() {
	console.log('create a event...');
	this.eventSvc.create(this.event).subscribe(resp => {
		this.resp = resp;
		this.router.navigate(['/calendar']);
		});
}

constructor(private eventSvc: EventService, private router: Router) { }

  ngOnInit() {
  }

}