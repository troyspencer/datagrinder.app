import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grinder-results',
  templateUrl: './grinder-results.component.html',
  styleUrls: ['./grinder-results.component.css']
})
export class GrinderResultsComponent implements OnInit {

  @Input() image_base64: string;

  constructor() { }

  ngOnInit() {
  }

}
