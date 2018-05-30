import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

import { Event } from "../model/event";

const url = "http://localhost:8080/Events/";

@Injectable()
export class EventService {
    
    clean: void {
        this.http.get(url + 'Clean');
    }

	list(): Observable<Event[]> {
		return this.http.get(url + 'List') as Observable<Event[]>;
	}

	create(event: Event): Observable<any>{
		console.log("eventsvc.create...");
		return this.http.post(url + "Add", event) as Observable<any>;
	}

	get(id): Observable<Event[]> {
		return this.http.get(url+"Get?id="+id) as Observable<Event[]>;
	  }

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	  }

	change(event: Event): Observable<any> {
		return this.http.post(url+"Change", event) as Observable<any>;
	  }
    
	constructor(private http: HttpClient) { }
}
