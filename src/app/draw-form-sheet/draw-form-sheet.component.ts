import { Component, ChangeDetectorRef, OnDestroy, Input, OnInit, Inject } from '@angular/core';
import { GrinderInput } from '../protobuf/datagrinder/datagrinder_pb';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { GrindDrawService } from '../grind-draw.service';

@Component({
  selector: 'app-draw-form-sheet',
  templateUrl: './draw-form-sheet.component.html',
  styleUrls: ['./draw-form-sheet.component.css']
})
export class DrawFormSheetComponent implements OnInit {

  grinderInputObject: GrinderInput.AsObject;
  grinderInput: GrinderInput;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<DrawFormSheetComponent>,
    private grindDrawService: GrindDrawService
  ) { }

  ngOnInit() {
    this.grinderInputObject = this.grindDrawService.grinderInput.toObject();
  }

  openLink(event: MouseEvent): void {
    this.grindDrawService.grinderInput.setSetting(this.grinderInputObject.setting);
    this.grindDrawService.grinderInput.setHeight(this.grinderInputObject.height);
    this.grindDrawService.grinderInput.setWidth(this.grinderInputObject.width);
    this.bottomSheetRef.dismiss(this.grinderInput);
    event.preventDefault();
  }

}
