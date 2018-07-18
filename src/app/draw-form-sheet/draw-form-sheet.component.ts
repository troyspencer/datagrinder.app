import { Component, ChangeDetectorRef, OnDestroy, Input, OnInit, Inject, AfterViewChecked } from '@angular/core';
import { GrinderInput } from '../protobuf/datagrinder_pb';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { GrindDrawService } from '../grind-draw.service';
import { BottomSheetService } from '../bottom-sheet.service';

@Component({
  selector: 'app-draw-form-sheet',
  templateUrl: './draw-form-sheet.component.html',
  styleUrls: ['./draw-form-sheet.component.css']
})
export class DrawFormSheetComponent implements  OnInit {

  grinderInputObject: GrinderInput.AsObject;
  grinderInput: GrinderInput;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<DrawFormSheetComponent>,
    public bottomSheetService: BottomSheetService
  ) { }

  ngOnInit() {
    this.bottomSheetService.bottomSheetRef = this.bottomSheetRef;
  }

}
