import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GearsComponent } from './gears/gears.component';
import {MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { DrawFormComponent } from './draw-form/draw-form.component';
import { HttpClientModule} from '@angular/common/http';
import { GrinderResultsComponent } from './grinder-results/grinder-results.component';

@NgModule({
  declarations: [
    AppComponent,
    GearsComponent,
    DrawFormComponent,
    GrinderResultsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
