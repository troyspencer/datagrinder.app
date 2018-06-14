import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { GearsComponent } from './gears/gears.component';
import { DrawFormComponent } from './draw-form/draw-form.component';
import { HttpClientModule} from '@angular/common/http';
import { GrinderResultsComponent } from './grinder-results/grinder-results.component';
import { GameHostingComponent } from './game-hosting/game-hosting.component';
import { ToolbarSidenavComponent } from './toolbar-sidenav/toolbar-sidenav.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    GearsComponent,
    DrawFormComponent,
    GrinderResultsComponent,
    GameHostingComponent,
    ToolbarSidenavComponent,
    SidenavContentComponent,
    SidenavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
