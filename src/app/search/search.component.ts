import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
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

detailForm = new FormGroup({
  searchk: new FormControl("") as unknown as any,

});



FormGroup: string | undefined;
isUserValid: boolean =false;

// registerSubmitted() {
//   console.log(this.registerForm)
//   this.loginAuth.registerUser([
//     this.registerForm.value.kanjiname, 
//     this.registerForm.value.kanjilastname,
//     this.registerForm.value.kananame,
//     this.registerForm.value.kanalastname,
//     this.registerForm.value.dob,
//     this.registerForm.value.email,
//     this.registerForm.value.gender,
//     this.registerForm.value.cell1,
//     this.registerForm.value.cell2,
//     this.registerForm.value.add1,
//     this.registerForm.value.add2,
//     this.registerForm.value.add3,
//     this.registerForm.value.phone1,
//     this.registerForm.value.phone2,
//   ]).subscribe((res: any) => {
//        if (res == 'Failure'){
//         this.isUserValid = false;
//         alert('Login Unsuccessful');
//        } else {
//         this.isUserValid =true;
//         alert('Login Successful');
//        }
//   });
// }


search() {
  console.log(this.detailForm)
  this.searchedResult={}
  this.loginAuth.getSearchByparam([
    this.detailForm.value.searchk
  ]).subscribe((res: any) => {
    this.searchedResult=res[0]
console.log(this.searchedResult)
    // if (res == 'Failure'){
    //  this.isUserValid = false;
    //  alert('Something went wrong');
    // } else {
    //  this.isUserValid =true;
    //  alert('Search Successful');
    // }
});
}

get Searchk(): FormControl {
  return this.detailForm.get('searchk')as FormControl;
}


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

}
