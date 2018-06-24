import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public nav: MatSidenav;
  public activity: MatSidenav;
  public mobileQuery: MediaQueryList;
}
