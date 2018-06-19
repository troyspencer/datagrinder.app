import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {GrindDrawService} from '../grind-draw.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { SafeUrl } from '@angular/platform-browser';
import { GrinderInput } from '../protobuf/datagrinder/datagrinder_pb';


@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnDestroy {
  image: SafeUrl;

  setting = 3;
  width = 500;
  height = 500;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private drawer: GrindDrawService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  grpcDrawing() {
    const grinderInput = new GrinderInput();
    grinderInput.setSetting(this.setting);
    grinderInput.setHeight(this.height);
    grinderInput.setWidth(this.width);
    this.drawer.getGrinderOutput(grinderInput).subscribe(grinderOutput => this.displayDrawing(grinderOutput['base64image']));
  }

  displayDrawing(drawingUrl: SafeUrl) {
    this.image = drawingUrl;
  }

}
