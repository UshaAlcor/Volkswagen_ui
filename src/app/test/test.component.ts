import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from '../auth.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource: any;
  // dataSource :any[];
  userData: any;
  @ViewChild(MatSort) sort: MatSort | undefined;

  inforesponse: any[] = [];
  model!: String[];
  auth: any;
  searchedResult:any= {};
  constructor(private httpClient: HttpClient, public dialog: MatDialog, private loginAuth: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    //this.userData = users;
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
      // if (res == 'Failure'){
      //  this.isUserValid = false;
      //  alert('Something went wrong');
      // } else {
      //  this.isUserValid =true;
      //  alert('Search Successful');
      // }
  });
  }
  FormGroup: string | undefined;

  
  isUserValid: boolean =false;
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
this.information();
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
    return this.updateForm.get('phone3')as FormControl;
  }
  
  refreshPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.activatedRoute.snapshot.url]);
 }

  information() {
    this.loginAuth.informationUser(this.model).subscribe(
      (data: any) => {
        this.inforesponse = data;

        console.log('information', this.inforesponse);
        console.log(Object.keys(this.inforesponse[0].id));

        // type NewType = 1 | -1 | 0 | undefined;
        // this.dataSource = new MatTableDataSource(
        //   (this.dataSource = this.inforesponse)
        // );
        type NewType = 1 | -1 | 0 | undefined;
        this.dataSource = new MatTableDataSource(
          (this.dataSource = this.inforesponse)
        );
        this.dataSource.sort = this.sort;
      });
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

  delete(rowid: number): void {
    if (rowid > -1) {
      this.inforesponse.splice(rowid, 1);
      this.inforesponse = [...this.inforesponse];
      this.dataSource = new MatTableDataSource(
        (this.dataSource = this.inforesponse)
        
      ); // new ref!
      console.log('here',this.dataSource)
    }
  }

  openDialog(action: any, obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: obj,
    });


    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Update') {
        this.updateRowData(result.data);
      this.refreshPage()
       
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  deleteRowData(row_obj: { id: any; }) {
    this.dataSource = this.inforesponse.filter((value: { id: any; }, key: any) => {
      console.log('deleted',value.id)

      return value.id != row_obj.id;
      
    });
  }
  deleteRecord(id:any)
{
  this.loginAuth.deleteUser(id).subscribe((res: any) => {
     this.isUserValid =true;
    alert(res.msg)
     this.search();
  })
  
}
  
updatesSubmitted(id:any) {
  console.log(this.searchedResult)
  // let id=this.searchedResult.id
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

  updateRowData(row_obj: { id: any; name: any; }) {
    this.dataSource = this.inforesponse.filter((value: { id: any; name: any; }, key: any) => {
     
      if (value.id == row_obj.id) {
        console.log('updated',value.id)
       // this.updatesSubmitted(value.id)
        value.name = row_obj.name;
        console.log('updated bad',value.name)
      }
      return true;
    });
    
  }


}
