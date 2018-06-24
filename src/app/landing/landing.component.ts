import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private sidenavService: SidenavService
  ) { }


  ngOnInit() {

  }

}
