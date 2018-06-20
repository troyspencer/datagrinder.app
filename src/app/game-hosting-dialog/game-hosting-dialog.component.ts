import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-game-hosting-dialog',
  templateUrl: './game-hosting-dialog.component.html',
  styleUrls: ['./game-hosting-dialog.component.css']
})
export class GameHostingDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GameHostingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    window.location.href = 'https://tinyurl.com/MONEYthegame';
    this.dialogRef.close();
  }
}
