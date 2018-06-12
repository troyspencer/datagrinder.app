import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GearsComponent } from './gears/gears.component';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule
} from '@angular/material';
import { DrawFormComponent } from './draw-form/draw-form.component';
import { HttpClientModule} from '@angular/common/http';
import { GrinderResultsComponent } from './grinder-results/grinder-results.component';
import { GameHostingComponent } from './game-hosting/game-hosting.component';

@NgModule({
  declarations: [
    AppComponent,
    GearsComponent,
    DrawFormComponent,
    GrinderResultsComponent,
    GameHostingComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
