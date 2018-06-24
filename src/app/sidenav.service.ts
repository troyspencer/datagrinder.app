import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public leftSidenav: MatSidenav;
  public rightSidenav: MatSidenav;
}
