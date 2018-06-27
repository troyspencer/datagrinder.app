import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    public sidenavService: SidenavService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  launchGrind() {
    this.router.navigate([{ outlets: { primary: ['grind'], activity: ['grind']}}]);
    if (!this.sidenavService.mobileQuery.matches) {
      this.sidenavService.activity.open();
    }
  }

  launchGame() {
    this.router.navigate([{ outlets: { primary: ['game'], activity: 'none' }}]);
    this.sidenavService.activity.close();
  }

  launchAbout() {
    this.router.navigate([{ outlets: { primary: ['about'], activity: 'none' }}]);
    this.sidenavService.activity.close();
  }
}
