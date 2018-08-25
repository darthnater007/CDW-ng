import { Component, OnInit } from '@angular/core';
import {saveAs as importedSaveAs} from "file-saver";

import { User } from '../../model/user';
import { Piece } from '../../model/piece';
import { Event } from '../../model/event';

import { EventService } from '../../service/event.service';
import { PieceService } from '../../service/piece.service';
import { LoginService } from '../../service/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    title : string = "Cincinnati D.I.Y. Writers Home"
    
    nextEvent : Event = new Event(0, '', '', '', '', null, null);
    newestPublication : Piece = new Piece(0, null, '', '', '', '', null, false);
    
    loggedIn : User = new User(0, '', '', '', '', '', '', '', '', false);

  constructor(private eventSvc: EventService, private pieceSvc: PieceService, private loginSvc: LoginService) { }

  ngOnInit() {
      if(this.loginSvc.data.user.loggedIn){
          this.loggedIn = this.loginSvc.data.user.instance;
      } 
      this.eventSvc.list().subscribe(events => {
            this.nextEvent = events[0];
            for(let event of events){
                if(this.nextEvent.EventStart > event.EventStart){
                    this.nextEvent = event;
                }
            }
		});
      
      this.pieceSvc.listPublications().subscribe(pieces => {
          this.newestPublication = pieces[0];
          for(let piece of pieces){
              if(this.newestPublication.Submitted < piece.Submitted)
                  this.newestPublication = piece;
          }
      });
  }
    
    view(fileName: string): void {
    this.pieceSvc.viewPiece(fileName).subscribe(blob => {
        importedSaveAs(blob, fileName);
        window.open(window.URL.createObjectURL(blob));
    });
}

}
