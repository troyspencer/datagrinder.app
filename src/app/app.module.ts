import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GearsComponent } from './gears/gears.component';
import {MatCardModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GearsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
