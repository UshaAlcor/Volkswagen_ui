import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent {
  message: string = ""
 
  cancelButtonText = "Cancel"
  title: string;
   dialogInput: string='';
  showError: boolean=false;

  // dialogInput = new FormControl('');
  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertDialogComponent,private authService:AuthService) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
    // if(this.authService.printpdfData.kananame!=this.dialogInput)
    // {
      
    //   this.showError=true;
    //   console.log(this.showError)
    // }
  
    
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
    this.authService.alertPdfData=this.dialogInput;
    console.log(this.dialogInput)
   
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
export class AlertDialogModel {

  constructor(public title: string, public message: string) {
  }
}