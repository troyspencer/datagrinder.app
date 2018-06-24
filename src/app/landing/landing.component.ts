import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private sidenavService: SidenavService,
    private router: Router
  ) { }


  ngOnInit() {
    this.landing();
  }

  landing() {
    this.sidenavService.activity.close();
    this.sidenavService.nav.open();
  }

}
