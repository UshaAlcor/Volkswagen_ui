import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-detailed-cust-info',
  templateUrl: './detailed-cust-info.component.html',
  styleUrls: ['./detailed-cust-info.component.css']
})
export class DetailedCustInfoComponent {
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
  id: any;
  searchResult: any;
  custInfo: any;



  constructor(private  loginAuth: AuthService, private route: ActivatedRoute,
    private router: Router) { 
    
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{this.id=params['id'] })
    this.loginAuth.getSearchByparam(this.id,"id").subscribe(res=>{
this.searchResult=res
this.searchResult.filter((data:any)=>{
if(this.id==data.id){
  this.custInfo=data
  this.registerForm.patchValue({
    kanjiname: this.custInfo. kananame,
    kanjilastname:this.custInfo.kanjilastname,
    kananame: this.custInfo.kananame,
    kanalastname: this.custInfo.kanalastname,
    dob: this.custInfo.dob,
    email:this.custInfo.email,
    gender:this.custInfo.gender,
    cell1:this.custInfo.cell1,
    cell2:this.custInfo.cell2,
    add1:this.custInfo.add1,
    add2:this.custInfo.add2,
    add3:this.custInfo.add3,
    phone1:this.custInfo.phone1,
    phone2:this.custInfo.phone2,
    phone3: this.custInfo.phone3
  
  
  });

}
})
console.log(this.searchResult)
    })
   }
registerForm = new FormGroup({
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

FormGroup: string | undefined;



isUserValid: boolean =false;


updatesSubmitted() {
 
  let updatedObj={

    kanjiname:this.registerForm.value.kanjiname, 
    kanjilastname:this.registerForm.value.kanjilastname,
    kananame: this.registerForm.value.kananame,
    kanalastname: this.registerForm.value.kanalastname,
    dob: this.registerForm.value.dob,
    email:this.registerForm.value.email,
    gender:this.registerForm.value.gender,
    cell1:this.registerForm.value.cell1,
    cell2:this.registerForm.value.cell2,
    add1:this.registerForm.value.add1,
    add2:this.registerForm.value.add2,
    add3:this.registerForm.value.add3,
    phone1:this.registerForm.value.phone1,
    phone2:this.registerForm.value.phone2,
    phone3: this.registerForm.value.phone3
  
  }
  this.loginAuth.updateUser(this.id,updatedObj
 
  ).subscribe((res: any) => {
       if (res == 'Failure'){
        this.isUserValid = false;
        alert('Update Unsuccessful');
       } else {
        this.isUserValid =true;
        alert('Update Successful');
        this.ngOnInit();
       }
  });
}
deleteRecord()
{
  this.loginAuth.deleteUser(this.id).subscribe((res: any) => {

     this.isUserValid =true;
    alert(res.msg)
     this.ngOnInit();
  })
  
}


get Kanjiname(): FormControl {
  return this.registerForm.get('kanjiname')as FormControl;

}

get Kanjilastname(): FormControl {
  return this.registerForm.get('kanjilastname')as FormControl;
}

get kananame(): FormControl {
  return this.registerForm.get('kananame')as FormControl;
}

get Kanalastname(): FormControl {
  return this.registerForm.get('kanalastname')as FormControl;
}

get dob(): FormControl {
  return this.registerForm.get('dob')as FormControl;
}

get email(): FormControl {
  return this.registerForm.get('email')as FormControl;
}

get gender(): FormControl {
  return this.registerForm.get('gender')as FormControl;
}

get Cell1(): FormControl {
  return this.registerForm.get('cell1')as FormControl;
}

get Cell2(): FormControl {
  return this.registerForm.get('cell2')as FormControl;
}

get Add1(): FormControl {
  return this.registerForm.get('add1')as FormControl;
}

get Add2(): FormControl {
  return this.registerForm.get('add2')as FormControl;
}

get Add3(): FormControl {
  return this.registerForm.get('add3')as FormControl;
}

get Phone1(): FormControl {
  return this.registerForm.get('phone1')as FormControl;
}

get Phone2(): FormControl {
  return this.registerForm.get('phone2')as FormControl;
}
get Phone3(): FormControl {
  return this.registerForm.get('phone3')as FormControl;
}

 //custinfo

 inforesponse: any;
 model!: String[];

 information(){
  this.loginAuth.informationUser(this.model).subscribe(
    (      result: any) => {
      this.inforesponse = result;
      console.log('information', this.inforesponse);
      console.log(Object.keys(this.inforesponse[0].id));


    }
  )
}

_locale = 'ja-JP';

getDateFormatString(): string {
  if (this._locale === 'ja-JP') {
    return 'YYYY/MM/DD';
  } else if (this._locale === 'fr') {
    return 'DD/MM/YYYY';
  }
  return '';
}

}
