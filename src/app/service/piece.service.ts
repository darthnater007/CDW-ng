import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

import { Piece } from "../model/piece";

const url = "http://localhost:8080/Pieces/";



@Injectable()
export class PieceService {


	listWorkshop(): Observable<Piece[]> {
		return this.http.get(url + 'Workshop') as Observable<Piece[]>;
	}
    
    listPublications(): Observable<Piece[]> {
		return this.http.get(url + 'Publications') as Observable<Piece[]>;
	}

    upload(file: File): Observable<any> {
        console.log("piecesvc upload...");const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', file, file.name);
    return this.http.post(url + "FileUpload", formData)  as Observable<Piece[]>;
    }
    
	create(piece: Piece): Observable<any>{
		console.log("piecesvc.create...");
		return this.http.post(url + "Add", piece) as Observable<any>;
	}

	get(id): Observable<Piece[]> {
		return this.http.get(url+"Get?id="+id) as Observable<Piece[]>;
	  }

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	  }

	change(piece: Piece): Observable<any> {
		return this.http.post(url+"Change", piece) as Observable<any>;
	  }
    
	constructor(private http: HttpClient) { }
}
