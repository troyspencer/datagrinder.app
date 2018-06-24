import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {GrindDrawService} from '../grind-draw.service';
import { SafeUrl } from '@angular/platform-browser';
import { GrinderInput, GrinderOutput } from '../protobuf/datagrinder/datagrinder_pb';
import { SidenavService } from '../sidenav.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatBottomSheet } from '@angular/material';
import { DrawFormSheetComponent } from '../draw-form-sheet/draw-form-sheet.component';
import { BottomSheetService } from '../bottom-sheet.service';
import { ActivityStateService } from '../activity-state.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit, OnDestroy {

  image: SafeUrl;
  grinderInput: GrinderInput = new GrinderInput();

  subscription: Subscription;
  mobileQuerySubscription: Subscription;
  isMobile: boolean;
  isFormOpen: boolean;

  constructor(
    private grindDrawService: GrindDrawService,
    public sidenavService: SidenavService,
    private router: Router,
    private bottomSheet: MatBottomSheet,
    private bottomSheetService: BottomSheetService,
    private activityStateService: ActivityStateService
  ){
   }

  ngOnInit() {
    this.subscribeToDrawForm();
    this.subscribeToMobileQuery();
    this.bottomSheetService.bottomSheetRef = this.bottomSheet;

    this.openDrawForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  subscribeToDrawForm() {
    const that = this;
    this.subscription = this.grindDrawService.drawFormComplete$.subscribe({
      next(grinderInput) {
        that.grpcDrawing();
      }
    } );
  }

  subscribeToMobileQuery() {
    const that = this;
    this.mobileQuerySubscription = this.sidenavService.mobileQueryChanged$.subscribe({
      next(isMobile) {
        if (that.activityStateService.activityOpen) {
          if (isMobile) {
            that.sidenavService.activity.close();
            that.openBottomSheet();
        } else {
            that.bottomSheet.dismiss();
            that.openSidenav();
          }
        }
      }
    });
  }

  openDrawForm(): void {
    this.activityStateService.activityOpened(true);
    if (this.sidenavService.mobileQuery.matches) {
      this.openBottomSheet();
    } else {
      this.openSidenav();
    }
  }

  openSidenav(): void {
      this.router.navigate([{ outlets: { 'activity': ['draw'] }}]);
      this.sidenavService.activity.open();
  }

  openBottomSheet() {
    this.bottomSheet.open(DrawFormSheetComponent);
    this.bottomSheetService.bottomSheetOpened(true);
  }

  grpcDrawing() {
    this.grindDrawService.getGrinderOutput().subscribe(grinderOutput => this.image = grinderOutput.getBase64image());
  }
}
