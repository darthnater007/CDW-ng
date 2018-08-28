import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

import { Piece } from "../model/piece";

const url = "http://cdw-web.herokuapp.com/Pieces/";



@Injectable()
export class PieceService {


	listWorkshop(): Observable<Piece[]> {
		return this.http.get(url + 'Workshop') as Observable<Piece[]>;
	}
    
    listPublications(): Observable<Piece[]> {
		return this.http.get(url + 'Publications') as Observable<Piece[]>;
	}

    upload(name: string, file: File): Observable<string[]> {
    const formData: FormData = new FormData();
    formData.append("name", name);
    formData.append( "file" , file);
    return this.http.post(url + "FileUpload", formData) as Observable<string[]>;
    }
    
    viewPiece(fileName: string): Observable<Blob> {
         let options = {responseType: 'blob' as 'json'};
        return this.http.get(url + "ViewPiece?fileName=" + fileName, options) as Observable<Blob>;
    }
    
	create(piece: Piece): Observable<any>{
		return this.http.post(url + "Add", piece) as Observable<any>;
	}

	get(id: number): Observable<Piece[]> {
		return this.http.get(url+"Get?id="+id) as Observable<Piece[]>;
	  }

	remove(id: number): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	  }
    
    removeFile(fileName: string): Observable<string[]>{
        return this.http.get(url + "RemoveFile?fileName=" + fileName) as Observable<string[]>;
    }

	change(piece: Piece): Observable<any> {
		return this.http.post(url+"Change", piece) as Observable<any>;
	  }
    
	constructor(private http: HttpClient) { }
}
