import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../auth.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent {
 
  inforesponse: any;
  auth: any;
  formdata: any;

  
  original="sme text";
  data: any;
  model!: String[];
  selection: any;
  dataSource: any;



  constructor(private  loginAuth: AuthService) { 
    this.information();
  }

  //custinfo

  FormGroup: string | undefined;
  isUserValid: boolean =false;

  userForm = new FormGroup({
    id:new FormControl("") as unknown as any,
    kanjiname: new FormControl("") as unknown as any,
  kanjilastname: new FormControl("") as unknown as any,
  kananame: new FormControl("") as unknown as any,
  kanalastname: new FormControl("") as unknown as any,
  email: new FormControl('', [Validators.required, Validators.email]) as unknown as any,
  cell1: new FormControl("") as unknown as any,
  cell2: new FormControl("") as unknown as any,
 
  });
  

  get Kanalastname(): FormControl {
    return this.userForm.get('kanalastname')as FormControl;
  }


  //more info
  
  detail(){
    this.loginAuth.infoUser([
      this.userForm.value.kanalastname,
    ]).subscribe((res: any) => {
      if (res == 'Failure'){
       this.isUserValid = false;
       alert(' hit Unsuccessful');
      } else {
       this.isUserValid =true;
       alert('hit  Successful');
      }
 });
}

//info
  information(){
    this.loginAuth.informationUser(this.model).subscribe(
      (      result: any) => {
        this.inforesponse = result;
        console.log('information', this.inforesponse);
        console.log(Object.keys(this.inforesponse[0].id));


      }
    )
  }

}
