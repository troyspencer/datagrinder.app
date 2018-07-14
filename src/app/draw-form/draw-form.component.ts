import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { GrindDrawService } from '../grind-draw.service';
import { BottomSheetService } from '../bottom-sheet.service';

@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {

  constructor(
    public sidenavService: SidenavService,
    public grindDrawService: GrindDrawService,
    private bottomSheetService: BottomSheetService
  ) {
  }

  ngOnInit() {
  }

  clickedGrind(event: MouseEvent): void {
    this.grindDrawService.completeDrawForm();
    if (this.bottomSheetService.bottomSheet) {
      this.bottomSheetService.bottomSheet.dismiss();
    }
    event.preventDefault();
  }

  clickedClose(event: MouseEvent): void {

    if (this.bottomSheetService.bottomSheet) {
      this.bottomSheetService.bottomSheet.dismiss();
    }
    this.sidenavService.activity.close();
    event.preventDefault();
  }

}
