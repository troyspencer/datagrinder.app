import { Component, ChangeDetectorRef, OnDestroy, Input, OnInit, Inject } from '@angular/core';
import {GrindDrawService} from '../grind-draw.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { SafeUrl } from '@angular/platform-browser';
import { GrinderInput } from '../protobuf/datagrinder/datagrinder_pb';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material';


@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {

  grinderInputObject: GrinderInput.AsObject;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public grinderInput: GrinderInput,
    private bottomSheetRef: MatBottomSheetRef<DrawFormComponent>
  ) { }

  ngOnInit() {
    this.grinderInputObject = this.grinderInput.toObject();
  }

  openLink(event: MouseEvent): void {
    this.grinderInput.setSetting(this.grinderInputObject.setting);
    this.grinderInput.setHeight(this.grinderInputObject.height);
    this.grinderInput.setWidth(this.grinderInputObject.width);

    this.bottomSheetRef.dismiss(this.grinderInput);
    event.preventDefault();
  }
}
