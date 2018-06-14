import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {GrindDrawService} from '../grind-draw.service';
import {GrinderResultsComponent} from '../grinder-results/grinder-results.component';
import { SafeUrl } from '@angular/platform-browser';
import { GrinderInput } from '../protobuf/datagrinder/datagrinder_pb';


@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {
  image: SafeUrl;

  setting = 3;
  width = 250;
  height = 250;

  constructor(
    private drawer: GrindDrawService
  ) { }

  ngOnInit() {
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
    console.log(drawingUrl);
  }

}
