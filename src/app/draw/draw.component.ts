import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import {GrindDrawService} from '../grind-draw.service';
import { SafeUrl } from '@angular/platform-browser';
import { GrinderInput, GrinderOutput } from '../protobuf/datagrinder/datagrinder_pb';
import { SidenavService } from '../sidenav.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatBottomSheet, MatSidenavContainer, MatSidenavContent } from '@angular/material';
import { DrawFormSheetComponent } from '../draw-form-sheet/draw-form-sheet.component';
import { BottomSheetService } from '../bottom-sheet.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit, OnDestroy {

  blankImage: SafeUrl = 'data:image/jpeg;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  image: SafeUrl;
  grinderInput: GrinderInput = new GrinderInput();

  subscription: Subscription;
  mobileQuerySubscription: Subscription;
  isMobile: boolean;
  isFormOpen: boolean;

  @ViewChild('sidenavContainer') sidenavContainer: MatSidenavContent;

  constructor(
    private grindDrawService: GrindDrawService,
    public sidenavService: SidenavService,
    private router: Router,
    public bottomSheetService: BottomSheetService
  ) {
  }

  ngOnInit() {
    this.subscribeToDrawForm();
    this.subscribeToMobileQuery();
    this.sidenavService.nav.open();
    this.openDrawForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  subscribeToDrawForm() {
    const that = this;
    this.subscription = this.grindDrawService.drawFormComplete$.subscribe({
      next(grinderInput) {
        if (grinderInput.getHeight() !== 0 && grinderInput.getWidth() !== 0) {
          that.grpcDrawing();
        } else {
          that.displayImage(String(that.blankImage));
        }
      }
    } );
  }

  subscribeToMobileQuery() {
    const that = this;
    this.mobileQuerySubscription = this.sidenavService.mobileQueryChanged$.subscribe({
      next(isMobile) {
        if (isMobile) {
          that.openBottomSheet();
          that.closeSidenav();
        } else {
          that.closeBottomSheet();
          that.openSidenav();
        }
      }
    });
  }

  openDrawForm(): void {
    if (this.sidenavService.mobileQuery.matches) {
      this.openBottomSheet();
    } else {
      this.openSidenav();
    }
  }

  openSidenav(): void {
      this.router.navigate([{ outlets: { 'activity': ['grind'] }}]);
      this.sidenavService.activity.open();
  }

  closeSidenav() {
    this.sidenavService.activity.close();
  }

  openBottomSheet() {
    this.bottomSheetService.bottomSheet.open(DrawFormSheetComponent);
  }

  closeBottomSheet() {
    this.bottomSheetService.bottomSheet.dismiss();
  }

  displayImage(base64Image: string) {
    this.image = base64Image;
  }

  grpcDrawing() {
    this.grindDrawService.getGrinderOutput().subscribe(grinderOutput => this.displayImage(grinderOutput.getBase64image()));
  }

}


