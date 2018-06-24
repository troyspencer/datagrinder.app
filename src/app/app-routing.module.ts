import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrawComponent} from './draw/draw.component';
import {DrawFormComponent} from './draw-form/draw-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'grind'
  },
  {
    path: 'grind',
    component: DrawComponent,
  },
  {
    path: 'draw',
    component: DrawFormComponent,
    outlet: 'grind'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
