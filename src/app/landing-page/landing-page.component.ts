import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import * as _moment from 'moment';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
// const today = new Date();
// const month = today.getMonth();
// const year = today.getFullYear();
const moment =  _moment
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class LandingPageComponent {
  date:any='';
  //date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  Roles: any = ['Admin', 'Author', 'Reader'];
  title = 'Bizpulse';
  showFiller = false;
  states: string[] = [
    'USA',
    'India',
    'Japan',
    'Australia',
    'Newzealand'
  ];

  details: string[] = [
    'Employee Name',
    'Login Details',
    'Email-Id'
  ];
  auth: any;
  constructor(private  loginAuth: AuthService) {  
  }

registerForm = new FormGroup({
  kanjiname: new FormControl("") as unknown as any,
  kanjilastname: new FormControl("") as unknown as any,
  kananame: new FormControl("") as unknown as any,
  kanalastname: new FormControl("") as unknown as any,
  dob : this.date,
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
  address2:new FormControl("") as unknown as any,
   address3: new FormControl("") as unknown as any,
   address4: new FormControl("") as unknown as any,
   address5: new FormControl("") as unknown as any,

});

FormGroup: string | undefined;



isUserValid: boolean =false;

registerSubmitted() {
  console.log(this.registerForm)
  this.loginAuth.registerUser([
    this.registerForm.value.kanjiname, 
    this.registerForm.value.kanjilastname,
    this.registerForm.value.kananame,
    this.registerForm.value.kanalastname,
    this.date,
    this.registerForm.value.email,
    this.registerForm.value.gender,
    this.registerForm.value.cell1,
    this.registerForm.value.cell2,
    this.registerForm.value.add1,
    this.registerForm.value.add2,
    this.registerForm.value.add3,
    this.registerForm.value.phone1,
    this.registerForm.value.phone2,
    this.registerForm.value.phone3,
  ]).subscribe((res: any) => {
       if (res == 'Failure'){
        this.isUserValid = false;
        alert('Login Unsuccessful');
       } else {
        this.isUserValid =true;
        alert('Login Successful');
       }
  });
}

updateDOB(dateObject:any) {
  let d = new Date(dateObject.value);
  const offset = d.getTimezoneOffset()
  d = new Date(d.getTime() - (offset*60*1000))
  this.date=d.toISOString().split('T')[0];
  console.log( this.date); 
}
}


