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
    private sidenavService: SidenavService,
    private router: Router
  ) { }

  ngOnInit() {
  }
}
