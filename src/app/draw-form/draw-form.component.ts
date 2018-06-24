import { Component, Input, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { GrinderInput } from '../protobuf/datagrinder/datagrinder_pb';
import { GrindDrawService } from '../grind-draw.service';
import { Subscription } from 'rxjs';
import { BottomSheetService } from '../bottom-sheet.service';
import { ActivityStateService } from '../activity-state.service';

@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {

  grinderInputObject: GrinderInput.AsObject;
  grinderInput: GrinderInput ;

  subscription: Subscription;

  constructor(
    public sidenavService: SidenavService,
    private grindDrawService: GrindDrawService,
    private bottomSheetService: BottomSheetService,
    private activityStateService: ActivityStateService
  ) { 
  }

  ngOnInit() {
    this.grinderInput = this.grindDrawService.grinderInput;
    this.grinderInputObject = this.grinderInput.toObject();
  }

  clickedGrind(): void {
    this.grinderInput.setHeight(this.grinderInputObject.height);
    this.grinderInput.setWidth(this.grinderInputObject.width);
    this.grinderInput.setSetting(this.grinderInputObject.setting);
    this.grindDrawService.grinderInput = this.grinderInput;
    this.grindDrawService.completeDrawForm(this.grinderInput);
    if (this.sidenavService.mobileQuery.matches) {
      this.bottomSheetService.bottomSheetRef.dismiss();
      this.activityStateService.activityOpened(false);

    }
  }

  clickedClose(): void {
    this.activityStateService.activityOpened(false);
    if (this.sidenavService.mobileQuery.matches) {
      this.bottomSheetService.bottomSheetRef.dismiss();
    } else {
      this.sidenavService.activity.close();
    }
  }

}
