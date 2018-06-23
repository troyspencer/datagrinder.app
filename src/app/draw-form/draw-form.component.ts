import { Component, Input, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { GrinderInput } from '../protobuf/datagrinder/datagrinder_pb';
import { GrindDrawService } from '../grind-draw.service';
import { Subscription } from 'rxjs';

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
    private grindDrawService: GrindDrawService
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
  }


}
