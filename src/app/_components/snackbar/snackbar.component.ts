import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  constructor(public sbRef: MatSnackBarRef<SnackbarComponent>, private _snackBar: MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(this.data.message, this.data.action);
  }
  closeSnackbar() {
    this.data.snackBar.dismiss();
  };
  get getIcon() {
    return this.data.snackType
  }

}
