import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrawComponent} from './draw/draw.component';
import {DrawFormComponent} from './draw-form/draw-form.component';
import { GameHostingComponent } from './game-hosting/game-hosting.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { BlankSidenavComponent } from './blank-sidenav/blank-sidenav.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: LandingComponent
  },
  {
    path: 'game',
    component: GameHostingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'grind',
    component: DrawComponent
  },
  {
    path: '',
    component: SidenavComponent,
    outlet: 'nav'
  },
  {
    path: 'none',
    component: BlankSidenavComponent,
    outlet: 'activity'
  },
  {
    path: 'grind',
    component: DrawFormComponent,
    outlet: 'activity'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
