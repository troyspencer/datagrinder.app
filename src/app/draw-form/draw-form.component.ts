import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {GrindDrawService} from '../grind-draw.service';
import {DrawGrind} from '../grind-draw.service';
import {GrinderResultsComponent} from '../grinder-results/grinder-results.component';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {
  image: SafeUrl;

  setting = 3;
  width = 500;
  height = 500;

  constructor(

    private drawer: GrindDrawService
  ) { }

  ngOnInit() {
  }


  displayDrawing(drawingUrl: SafeUrl) {
    this.image = drawingUrl;
    console.log(drawingUrl);
  }

  askForDrawing() {
    const dg = {
      setting: this.setting,
      height: this.height,
      width: this.width,
    };

    this.drawer.getBase64(dg).subscribe(drawingUrl => this.displayDrawing(drawingUrl));
  }

}
