import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrawComponent} from './draw/draw.component';
import {DrawFormComponent} from './draw-form/draw-form.component';
import { GameHostingComponent } from './game-hosting/game-hosting.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
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
    component: DrawComponent,
  },
  {
    path: '',
    component: SidenavComponent,
    outlet: 'nav'
  },
  {
    path: 'draw',
    component: DrawFormComponent,
    outlet: 'activity'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
