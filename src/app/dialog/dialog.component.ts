import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  action: string;
  local_data: any;
  dialog: any;
  inforesponse: any;
  
  
  constructor(private  loginAuth: AuthService,private router: Router, private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<DialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData
  ) {
    console.log('ye wala h data',data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }


  updateForm = new FormGroup({
    kanjiname: new FormControl("") as unknown as any,
    kanjilastname: new FormControl("") as unknown as any,
    kananame: new FormControl("") as unknown as any,
    kanalastname: new FormControl("") as unknown as any,
    dob: new FormControl("") as unknown as any,
    gender: new FormControl("") as unknown as any,
    email: new FormControl('', [Validators.required, Validators.email]) as unknown as any,
    cell1: new FormControl("") as unknown as any,
    cell2: new FormControl("") as unknown as any,
    add1: new FormControl("") as unknown as any,
    add2: new FormControl("") as unknown as any,
    add3: new FormControl("") as unknown as any,
    phone1: new FormControl("") as unknown as any,
    phone2: new FormControl("") as unknown as any,
    phone3: new FormControl("") as unknown as any,
  });
  

// itemId = this.data.id;
  
  isUserValid: boolean =false;
  
  updatesSubmitted(action:any) {
    let id=this.data.id
   if(action=="Update"){
    
    let updatedObj={
  
      kanjiname:this.updateForm.value.kanjiname, 
      kanjilastname:this.updateForm.value.kanjilastname,
      kananame: this.updateForm.value.kananame,
      kanalastname: this.updateForm.value.kanalastname,
      dob: this.updateForm.value.dob,
      email:this.updateForm.value.email,
      gender:this.updateForm.value.gender,
      cell1:this.updateForm.value.cell1,
      cell2:this.updateForm.value.cell2,
      add1:this.updateForm.value.add1,
      add2:this.updateForm.value.add2,
      add3:this.updateForm.value.add3,
      phone1:this.updateForm.value.phone1,
      phone2:this.updateForm.value.phone2,
      phone3: this.updateForm.value.phone3
    
    }
    this.loginAuth.updateUser(id,updatedObj
   
    ).subscribe((res: any) => {
         if (res == 'Failure'){
          this.isUserValid = false;
          alert('Update Unsuccessful');
         } else {
          this.isUserValid =true;
          alert('Update Successful');
         
         
         }
    });
  }
  else{
  this.deleteRecord(id);
  

  }
  }
  deleteRecord(id:any)
  {
    this.loginAuth.deleteUser(id).subscribe((res: any) => {
      
       this.isUserValid =true;
      alert(res.msg)
      
    })
    
  }
  
  
  get Kanjiname(): FormControl {
    return this.updateForm.get('kanjiname')as FormControl;
  
  }
  
  get Kanjilastname(): FormControl {
    return this.updateForm.get('kanjilastname')as FormControl;
  }
  
  get kananame(): FormControl {
    return this.updateForm.get('kananame')as FormControl;
  }
  
  get Kanalastname(): FormControl {
    return this.updateForm.get('kanalastname')as FormControl;
  }
  
  get dob(): FormControl {
    return this.updateForm.get('dob')as FormControl;
  }
  
  get email(): FormControl {
    return this.updateForm.get('email')as FormControl;
  }
  
  get gender(): FormControl {
    return this.updateForm.get('gender')as FormControl;
  }
  
  get Cell1(): FormControl {
    return this.updateForm.get('cell1')as FormControl;
  }
  
  get Cell2(): FormControl {
    return this.updateForm.get('cell2')as FormControl;
  }
  
  get Add1(): FormControl {
    return this.updateForm.get('add1')as FormControl;
  }
  
  get Add2(): FormControl {
    return this.updateForm.get('add2')as FormControl;
  }
  
  get Add3(): FormControl {
    return this.updateForm.get('add3')as FormControl;
  }
  
  get Phone1(): FormControl {
    return this.updateForm.get('phone1')as FormControl;
  }
  
  get Phone2(): FormControl {
    return this.updateForm.get('phone2')as FormControl;
  }

  get Phone3(): FormControl {
    return this.updateForm.get('phone2')as FormControl;
  }
  
  refreshPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.activatedRoute.snapshot.url]);
 }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }


  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
