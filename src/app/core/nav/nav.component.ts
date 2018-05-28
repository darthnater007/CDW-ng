import { Component, OnInit } from '@angular/core';

import { Nav } from '../../model/nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

navItems: Nav[] = [
	new Nav('Home', '/home', 'Go to the home page'),
	new Nav('About Us', '/about', 'Who are we?'),
    new Nav('Our Writers', '/ourwriters', 'Meet our writers'),
	new Nav('Publications', '/publications', 'A list of our published works'),
	new Nav('Workshop', '/vendor/list', 'A place for members to upload pieces for workshop'),
	new Nav('Calendar', '/product/list', 'What we are up to'),
	new Nav('Contact Us', '/about', 'Need to get a hold of our administrators directly?  Go here!')
];
    
constructor() { }

  ngOnInit() {
  }

}

