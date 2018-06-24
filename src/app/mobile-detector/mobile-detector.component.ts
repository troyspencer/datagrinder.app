import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-mobile-detector',
  templateUrl: './mobile-detector.component.html',
  styleUrls: ['./mobile-detector.component.css']
})
export class MobileDetectorComponent implements OnInit, OnChanges {

  @Input() mobileMatches: boolean;
  constructor(public sidenavService: SidenavService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.sidenavService.mobileChanged(this.mobileMatches);
    console.log(changes);
  }
}
