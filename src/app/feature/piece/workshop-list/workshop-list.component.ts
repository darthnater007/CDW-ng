import { Component, OnInit } from '@angular/core';
import {saveAs as importedSaveAs} from "file-saver";

import { Piece } from '../../../model/piece';
import { User } from '../../../model/user';

import { PieceService } from '../../../service/piece.service';
import { LoginService } from '../../../service/login.service';

import { SortdownPipe } from '../../../pipe/sortdown.pipe';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {
	
	title : string =  'Workshop';
    sortBy: string = "Submitted";
    
    LocalTime: Date;
    
    file : File = null;
    
    pieces : Piece[];
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
	
constructor(private pieceSvc: PieceService, private loginSvc: LoginService) { }

  ngOnInit() {
      
      if(this.loginSvc.data.user.loggedIn){
          this.loggedIn = this.loginSvc.data.user.instance;
      } 
		this.pieceSvc.listWorkshop().subscribe(pieces => {
			this.pieces = pieces;
		});
	  
//	  if(this.sysSvc.data.piece.loggedIn){
//			this.piece = this.sysSvc.data.piece.instance;
//		}else{
//			console.error("User not logged in.");
//		}  (No Sys Service yet)
  }

remove(pieceId: number): void {
    this.pieceSvc.remove(pieceId).subscribe(res => {
        this.ngOnInit();
    });
}

view(fileName: string): void {
    this.pieceSvc.viewPiece(fileName).subscribe(blob => {
        importedSaveAs(blob, fileName);
        window.open(window.URL.createObjectURL(blob));
    })
}
	
	setSortBy(column: string): void {
    this.sortBy = column;
  }

}