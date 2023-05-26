import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent {
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
  searchedResult: any={};



  constructor(private  loginAuth: AuthService) { 
    
  }
  get Searchk(): FormControl {
    return this.updateForm.get('searchk')as FormControl;
  }
  search() {
    console.log(this.updateForm)
    this.searchedResult={}
   
    this.loginAuth.getSearchByparam([
      this.updateForm.value.searchk
    ]).subscribe((res: any) => {
      this.searchedResult=res[0]
      console.log(this.searchedResult)
      if(this.searchedResult){
      this.updateForm.patchValue({
        kanjiname: this.searchedResult. kananame,
        kanjilastname:this.searchedResult.kanjilastname,
        kananame: this.searchedResult.kananame,
        kanalastname: this.searchedResult.kanalastname,
        dob: this.searchedResult.dob,
        email:this.searchedResult.email,
        gender:this.searchedResult.gender,
        cell1:this.searchedResult.cell1,
        cell2:this.searchedResult.cell2,
        add1:this.searchedResult.add1,
        add2:this.searchedResult.add2,
        add3:this.searchedResult.add3,
        phone1:this.searchedResult.phone1,
        phone2:this.searchedResult.phone2,
        phone3: this.searchedResult.phone3
      
      
      });
    }
  
  
      // if (res == 'Failure'){
      //  this.isUserValid = false;
      //  alert('Something went wrong');
      // } else {
      //  this.isUserValid =true;
      //  alert('Search Successful');
      // }
  });
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
  searchk: new FormControl("") as unknown as any,


});

FormGroup: string | undefined;



isUserValid: boolean =false;

updatesSubmitted() {
  console.log(this.searchedResult)
  let id=this.searchedResult.id
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
        this.search();
       }
  });
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
deleteRecord()
{
  this.loginAuth.deleteUser(this.searchedResult?.id).subscribe((res: any) => {
   
     this.isUserValid = false;
     alert(res.msg);
    
     this.isUserValid =true;
    alert(res.msg)
     this.search();
  })
  
}
}
