import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {GrindDrawService} from '../grind-draw.service';
import {DrawGrind} from '../grind-draw.service';
import {GrinderResultsComponent} from '../grinder-results/grinder-results.component';

@Component({
  selector: 'app-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {

  image_base64 = '';
  setting = 1;
  width = 640;
  height = 480;

  constructor(
    private drawer: GrindDrawService
  ) { }

  ngOnInit() {
  }

  displayDrawing() {
    const dg = {
      setting: this.setting,
      width: this.width,
      height: this.height,
    };

    this.drawer.getDrawing(dg).subscribe(drawing => this.image_base64 = drawing);
  }

}
