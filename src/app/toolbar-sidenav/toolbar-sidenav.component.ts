import {MediaMatcher} from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-toolbar-sidenav',
  templateUrl: './toolbar-sidenav.component.html',
  styleUrls: ['./toolbar-sidenav.component.css']
})
export class ToolbarSidenavComponent implements OnDestroy, OnInit {

  enableSidenav = false;
  mobileQuery: MediaQueryList;

  @ViewChild('rsnav') public rsnav: MatSidenav;
  @ViewChild('lsnav') public lsnav: MatSidenav;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public sidenavService: SidenavService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sidenavService.rightSidenav = this.rsnav;
    this.sidenavService.leftSidenav = this.lsnav;
  }

  toggleLeftSidebar() {
    this.lsnav.toggle();
  }

}
