import { Injectable, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class RightSidenavService {
  public sidenav: MatSidenav;
}
