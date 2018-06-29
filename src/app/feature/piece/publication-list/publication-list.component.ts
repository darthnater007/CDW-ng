import { Component, OnInit } from '@angular/core';
import {saveAs as importedSaveAs} from "file-saver";

import { Piece } from '../../../model/piece';

import { PieceService } from '../../../service/piece.service';

import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
	pieces : Piece[];
	// piece : Piece; (no sys service yet)
	
	title : string =  'Publications';
	sortBy: string = "Submitted";
	
constructor(private pieceSvc: PieceService) { }

  ngOnInit() {
		this.pieceSvc.listPublications().subscribe(pieces => {
			this.pieces = pieces;
            console.log("Pieces list =" + pieces);
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