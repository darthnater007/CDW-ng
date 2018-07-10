import { Component, OnInit } from '@angular/core';
import {saveAs as importedSaveAs} from "file-saver";

import { Piece } from '../../../model/piece';
import { User } from '../../../model/user';

import { PieceService } from '../../../service/piece.service';
import { LoginService } from '../../../service/login.service';

import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
	pieces : Piece[];
	
	title : string =  'Publications';
	sortBy: string = "Submitted";
    
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
	
constructor(private pieceSvc: PieceService, private loginSvc: LoginService) { }

  ngOnInit() {
		this.pieceSvc.listPublications().subscribe(pieces => {
			this.pieces = pieces;
		});
	  
      if(this.loginSvc.data.user.loggedIn){
          this.loggedIn = this.loginSvc.data.user.instance;
      } 
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