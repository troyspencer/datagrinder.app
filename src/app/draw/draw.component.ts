import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import {GrindDrawService} from '../grind-draw.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { SafeUrl } from '@angular/platform-browser';
import { GrinderInput, GrinderOutput } from '../protobuf/datagrinder/datagrinder_pb';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { DrawFormComponent } from '../draw-form/draw-form.component';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  image: SafeUrl;

  grinderInput: GrinderInput = new GrinderInput();

  constructor(
    private bottomSheet: MatBottomSheet,
    private drawer: GrindDrawService
  ){
  }

  ngOnInit() {
    this.grinderInput.setHeight(500);
    this.grinderInput.setWidth(500);
    this.grinderInput.setSetting(3);
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(DrawFormComponent, {
      data: this.grinderInput,
    });

    bottomSheetRef.afterDismissed().subscribe((grinderInput) => {
      if (grinderInput) {
        this.grinderInput = grinderInput;
        this.grpcDrawing(grinderInput);
      }
    });

  }

  grpcDrawing(grinderInput: GrinderInput) {
    this.drawer.getGrinderOutput(grinderInput).subscribe(grinderOutput => this.image = grinderOutput.getBase64image());
  }

}
