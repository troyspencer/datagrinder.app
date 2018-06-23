import { Component, OnInit, OnDestroy } from '@angular/core';
import {GrindDrawService} from '../grind-draw.service';
import { SafeUrl } from '@angular/platform-browser';
import { GrinderInput, GrinderOutput } from '../protobuf/datagrinder/datagrinder_pb';
import { RightSidenavService } from '../right-sidenav.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit, OnDestroy {

  image: SafeUrl;
  grinderInput: GrinderInput = new GrinderInput();

  subscription: Subscription;

  constructor(
    private grindDrawService: GrindDrawService,
    public rightSidenavService: RightSidenavService,
    private router: Router
  ){
   }

  ngOnInit() {
    this.subscribeToDrawForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  subscribeToDrawForm() {
    const that = this;
    this.subscription = this.grindDrawService.drawFormComplete$.subscribe({
      next(grinderInput) {
        that.grpcDrawing(grinderInput);
      }
    } );
  }

  openSidenav(): void {
      this.router.navigate([{ outlets: { 'right-sidenav': ['draw'] }}]);
      this.rightSidenavService.sidenav.open();
  }

  grpcDrawing(grinderInput: GrinderInput) {
    this.grindDrawService.getGrinderOutput(grinderInput).subscribe(grinderOutput => this.image = grinderOutput.getBase64image());
  }
}
