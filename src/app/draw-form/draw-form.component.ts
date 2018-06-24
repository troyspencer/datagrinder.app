import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { GrindDrawService } from '../grind-draw.service';
import { BottomSheetService } from '../bottom-sheet.service';
import { ActivityStateService } from '../activity-state.service';

@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {

  constructor(
    public sidenavService: SidenavService,
    private grindDrawService: GrindDrawService,
    private bottomSheetService: BottomSheetService,
    private activityStateService: ActivityStateService
  ) { 
  }

  ngOnInit() {
  }

  clickedGrind(): void {
    this.grindDrawService.completeDrawForm();
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
