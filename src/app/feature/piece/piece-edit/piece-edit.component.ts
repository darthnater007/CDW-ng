import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Piece } from '../../../model/piece';
import { User } from '../../../model/user';

import { PieceService } from '../../../service/piece.service';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-piece-edit',
  templateUrl: './piece-edit.component.html',
  styleUrls: ['./piece-edit.component.css']
})
export class PieceEditComponent implements OnInit {
	title: string = "Edit Piece";
	
	id: number;
    
    file: File = null;
	resp: string[];
	
	piece: Piece = new Piece(0, null, '', '', '', '', null, false);
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
	

constructor(private pieceSvc: PieceService, private loginSvc: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      if(this.loginSvc.data.user.loggedIn){
          this.loggedIn = this.loginSvc.data.user.instance;
      } 
      
	this.route.params.subscribe(parms => this.id = parms['id']);
	this.pieceSvc.get(this.id).subscribe(pieces => {
		this.piece = pieces.length > 0 ? pieces[0] : null;
		});
  }
    
    getNewFile(files: FileList){
        this.pieceSvc.removeFile(this.piece.FileName).subscribe(resp => {
            if(resp[0] == 'success'){
                this.file = files.item(0);
                this.piece.FileName = files.item(0).name;
            }else{
                alert("Oops! Your file was not uploaded properly... Please try again."); 
            }
        });
    }
    
    upload(){
        
        this.pieceSvc.upload(this.piece.FileName, this.file).subscribe(resp => {
            if(resp[0] != 'success'){
                alert("Oops! Your file was not uploaded properly... Please try again.")
            }
        });
    }
	
    change() {
        if (this.file != null){
            this.upload();
        }
        this.pieceSvc.change(this.piece).subscribe(resp => {
            this.resp = resp;
            if(this.piece.Publication){
                this.router.navigate(['./publications'])
            }else{
              this.router.navigate(['/workshop']);
            }
            });
    }

}