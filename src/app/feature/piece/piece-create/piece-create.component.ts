import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FileUploadModule} from 'primeng/primeng';

import { Piece } from '../../../model/piece';
import { User } from '../../../model/user';

import { PieceService } from '../../../service/piece.service';
import { UserService } from '../../../service/user.service';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-piece-create',
  templateUrl: './piece-create.component.html',
  styleUrls: ['./piece-create.component.css']
})
export class PieceCreateComponent implements OnInit {
    type: string = ''; //for gathering whether publication or workshop piece
    
	titleWork: string = "Submit a Piece for Workshop";
    titlePub: string = "Add a piece to our Publications";
    
    file: File;
	resp: any;
    
	piece: Piece = new Piece(0, null, '', '', '', '', null, false);
    users: User[];
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);
    
    getFileName(files: FileList){
        this.file = files.item(0);
        this.piece.FileName = files.item(0).name;
    }
    
    upload(){

        this.pieceSvc.upload(this.piece.FileName, this.file).subscribe(resp => {
            if(resp[0] == 'success'){
                this.create();
                    }else{
            alert("Oops! Your file was not uploaded properly... Please try again.")
        }
        });
    }
	
    create() {
            this.pieceSvc.create(this.piece).subscribe(resp => {
                this.resp = resp;
                if (this.type == 'publication'){
                    this.router.navigate(['/publications']);
                }else{
                    this.router.navigate(['/workshop']);
                }
            });

    }

constructor(private pieceSvc: PieceService, private userSvc: UserService, private loginSvc: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      if(this.loginSvc.data.user.loggedIn){
          this.loggedIn = this.loginSvc.data.user.instance;
      } 
      
      this.route.params.subscribe(parms => this.type = parms['type']);
      if (this.type == 'publication'){
          this.piece.Publication = true;
      }else{
          this.piece.Publication = false;
          this.piece.User = this.loggedIn;
      }
      
      this.userSvc.list().subscribe(users => {
          this.users = users;
      });
      
  } // onInit

}