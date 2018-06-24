import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { GameHostingDialogComponent } from '../game-hosting-dialog/game-hosting-dialog.component';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-game-hosting',
  templateUrl: './game-hosting.component.html',
  styleUrls: ['./game-hosting.component.css']
})
export class GameHostingComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.sidenavService.nav.open();
    this.sidenavService.activity.close();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GameHostingDialogComponent, {
      width: '40em'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
