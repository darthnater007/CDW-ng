import { Component, OnInit } from '@angular/core';

import { Piece } from '../../../model/piece';

import { PieceService } from '../../../service/piece.service';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {
	pieces : Piece[];
	// piece : Piece; (no sys service yet)
	
	title : string =  'Workshop';
	// sortBy: string = "Id"; (no pipe yet)
	
constructor(private pieceSvc: PieceService) { }

  ngOnInit() {
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
	
//	setSortBy(column: string): void {
//    this.sortBy = column; (no sortpipe yet)
//  }

}