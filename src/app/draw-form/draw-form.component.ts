import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { GrinderInput } from '../protobuf/datagrinder/datagrinder_pb';



@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {

  grinderInputObject: GrinderInput.AsObject;
  @Input() grinderInput: GrinderInput;
  @Output() inputChosen = new EventEmitter<GrinderInput>();

  constructor(
  ) { }

  ngOnInit() {
    this.grinderInputObject = this.grinderInput.toObject();
  }

  clickedGrind(): void {
    this.grinderInput.setHeight(this.grinderInputObject.height);
    this.grinderInput.setWidth(this.grinderInputObject.width);
    this.grinderInput.setSetting(this.grinderInputObject.setting);
    this.chooseInput(this.grinderInput);
  }

  chooseInput(grinderInput: GrinderInput) {
    this.inputChosen.emit(grinderInput);
  }

}
