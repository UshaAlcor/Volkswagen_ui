import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/_services';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  title: string='';
  message: string='';
  type:string='';
  buttonType:string=''
  lockImg?:boolean=false;
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,public alertService:AlertService) { }


  ngOnInit() {
    console.log(this.lockImg)
  }
  clickLink()
  {
    this.dialogRef.close()

  }
}