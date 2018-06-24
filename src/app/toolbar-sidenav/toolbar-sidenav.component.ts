import {MediaMatcher} from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-sidenav',
  templateUrl: './toolbar-sidenav.component.html',
  styleUrls: ['./toolbar-sidenav.component.css']
})
export class ToolbarSidenavComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;

  @ViewChild('rsnav') public rsnav: MatSidenav;
  @ViewChild('lsnav') public lsnav: MatSidenav;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public sidenavService: SidenavService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sidenavService.activity = this.rsnav;
    this.sidenavService.nav = this.lsnav;
    this.sidenavService.mobileQuery = this.mobileQuery;

  }

  landing() {
    this.router.navigate(['']);
    this.sidenavService.activity.close();
    this.sidenavService.nav.open();
  }

}
