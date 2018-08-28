import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

import { User } from "../model/user";
import { Login } from '../model/login';

const url = "http://cdw-web.herokuapp.com/Writers/";

@Injectable()
export class UserService {

    login(login: Login): Observable<User[]> {
        return this.http.post(url+"Authenticate", login) as Observable<User[]>;
	}

	list(): Observable<User[]> {
		return this.http.get(url + 'List') as Observable<User[]>;
	}

	create(user: User): Observable<any>{
		return this.http.post(url + "Add", user) as Observable<any>;
	}

	get(id): Observable<User[]> {
		return this.http.get(url+"Get?id="+id) as Observable<User[]>;
	  }

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	  }

	change(user: User): Observable<any> {
		return this.http.post(url+"Change", user) as Observable<any>;
	  }
    
	constructor(private http: HttpClient) { }
}
