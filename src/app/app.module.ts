import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatDividerModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatTooltipModule,
  MatGridListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { GearsComponent } from './gears/gears.component';
import { DrawFormComponent } from './draw-form/draw-form.component';
import { HttpClientModule} from '@angular/common/http';
import { GrinderResultsComponent } from './grinder-results/grinder-results.component';
import { GameHostingComponent } from './game-hosting/game-hosting.component';
import { ToolbarSidenavComponent } from './toolbar-sidenav/toolbar-sidenav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GameHostingDialogComponent } from './game-hosting-dialog/game-hosting-dialog.component';
import { AppRoutingModule } from './/app-routing.module';
import { DrawComponent } from './draw/draw.component';
import { DrawFormSheetComponent } from './draw-form-sheet/draw-form-sheet.component';
import { MobileDetectorComponent } from './mobile-detector/mobile-detector.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { BlankSidenavComponent } from './blank-sidenav/blank-sidenav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  entryComponents: [
    GameHostingDialogComponent,
    DrawFormSheetComponent
  ],
  declarations: [
    AppComponent,
    GearsComponent,
    DrawFormComponent,
    GrinderResultsComponent,
    GameHostingComponent,
    ToolbarSidenavComponent,
    SidenavComponent,
    GameHostingDialogComponent,
    DrawComponent,
    DrawFormSheetComponent,
    MobileDetectorComponent,
    LandingComponent,
    AboutComponent,
    BlankSidenavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatGridListModule,
    MatTooltipModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
