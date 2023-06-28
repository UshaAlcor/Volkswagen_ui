import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../auth.service';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss']
})
export class ListcustomerComponent {

  inforesponse: any[] = [
    
  ];

  
  auth: any;
  formdata: any;
  original="sme text";
  data: any;
  model!: String[];
  form: FormGroup | undefined
  
  
 


  constructor(private  loginAuth: AuthService,private http: HttpClient) { }
  


  //View Records

  information(){
    this.loginAuth.informationUser(this.model).subscribe(
      (      result: any) => {
        this.inforesponse = result;
        console.log('information', this.inforesponse);
        console.log(Object.keys(this.inforesponse[0].id));
      }
    )
  }

  //delete

// delete(item: any): void {
//   const itemIndex = this.inforesponse.indexOf(item); 
//   const deletedrecord = this.inforesponse.splice(itemIndex, 1);
//   console.log('deleted', deletedrecord)
//   console.log('item',item.id)
// }
delete(item:any)
{
  this.loginAuth.deleteUser(item.id).subscribe((res: any) => {
   
    
     alert(res.msg);
    
   
    alert(res.msg)
     this.search();
  })
  
}
search() {

  this.loginAuth.getSearchByparam([

  ]).subscribe((res: any) => {
    this.inforesponse=res
console.log(this.inforesponse)
    // if (res == 'Failure'){
    //  this.isUserValid = false;
    //  alert('Something went wrong');
    // } else {
    //  this.isUserValid =true;
    //  alert('Search Successful');
    // }
});
}

alert(): void {
  
  alert('Are you sure you want to delete the record ?');
  
}


//Sorting by Kanalstname

sortTable: 'asc' | 'desc' = 'asc';
sortKana(): void {
this.sortTable = this.sortTable === 'asc' ? 'desc' : 'asc';
  const multiplier = this.sortTable === 'asc' ? 1 : -1;

  this.inforesponse.sort(function (a: { kanalastname: any; }, b: { kanalastname: any; }): any {
    if (a.kanalastname < b.kanalastname) {
      return -1 * multiplier;
    } else if (a.kanalastname > b.kanalastname) {
      return 1 * multiplier;
    } else {
      return 0;
    }
  });
}

trackByFn(index: number, item: any) {
  return item.id;
}


}