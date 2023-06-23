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
import { MatCheckboxChange } from '@angular/material/checkbox';

export interface vehicleNew {
  modelyear:any;
  modelcategory:string;
  grade:string;
  modelcode:any;
  commissionno:any;
  VINnumber:any
  distributorinventory:any;
  stockinventory:any;
   }
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  displayedColumns: string[] = ['year', 'category', 'grade', 'modelcode', 'commission', 'vinno','distributorinventory', 'stockinventory'];
  dataSource: any;
  // dataSource :any[];
  userData: any;
  @ViewChild(MatSort) sort: MatSort | undefined;

  inforesponse: any[] = [];
  model: vehicleNew={
    modelyear: undefined,
    modelcategory: '',
    grade: '',
    modelcode: undefined,
    commissionno: undefined,
    VINnumber: undefined,
    distributorinventory: '',
    stockinventory: ''
  }
  auth: any;
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
  
  });
  
  FormGroup: string | undefined;

  
  isUserValid: boolean =false;
  
  updatesSubmitted(){
    console.log(this.updateForm)
    let id:any;
    this.loginAuth.updateUser(id,[
      this.updateForm.value.kanjiname, 
      this.updateForm.value.kanjilastname,
      this.updateForm.value.kananame,
      this.updateForm.value.kanalastname,
      this.updateForm.value.dob,
      this.updateForm.value.email,
      this.updateForm.value.gender,
      this.updateForm.value.cell1,
      this.updateForm.value.cell2,
      this.updateForm.value.add1,
      this.updateForm.value.add2,
      this.updateForm.value.add3,
      this.updateForm.value.phone1,
      this.updateForm.value.phone2,
      this.updateForm.value.phone3,
    ]).subscribe((res: any) => {
         if (res == 'Failure'){
          this.isUserValid = false;
          alert('Update Unsuccessful');
         } else {
          this.isUserValid =true;
          alert('Update Successful');
         }
    });
  }
  
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   console.log(this.dataSource.filter)
  // }
  applyFilterSearch(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.loginAuth.getNewCarSearchByparam([filterValue

    ]).subscribe((res: any) => {
      this.dataSource=res
  console.log(res)
    })
  
  }
  applyFilter(event: Event) {
    //const filterValue = (event.target as HTMLInputElement).value;
   // console.log(filterValue)
   // this.dataSource.filter = filterValue.trim().toLowerCase();
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
   let model={
    modelyear:this.model.modelyear,
modelcategory:this.model.modelcategory,
grade:this.model.grade,
modelcode:this.model.modelcode,
commissionno:this.model.commissionno,
VINnumber:this.model.VINnumber,
distributorinventory:this.model.distributorinventory,
stockinventory:this.model.stockinventory,
      
    }
    this.loginAuth.newCars(model).subscribe(
      (data: any) => {
        this.inforesponse = data;
        console.log(data)
       

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

  //delete

  // delete(rowid: number): void {
  //   if (rowid > -1) {
  //     this.inforesponse.splice(rowid, 1);
  //     this.inforesponse = [...this.inforesponse];
  //     this.dataSource = new MatTableDataSource(
  //       (this.dataSource = this.inforesponse)
        
  //     ); // new ref!
  //     console.log('here',this.dataSource)
  //   }
  // }
  
  alert(): void {
    
    alert('選択済車両の情報がクリアされますが、よろしいですか？');
    
  }

  terminatealert(): void {
    
    alert('Are you sure you want to Terminate ?');
    
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

  updateRowData(row_obj: { id: any; name: any; }) {
    this.dataSource = this.inforesponse.filter((value: { id: any; name: any; }, key: any) => {
     
      if (value.id == row_obj.id) {
        console.log('updated',value.id)
        value.name = row_obj.name;
        console.log('updated bad',value.name)
      }
      return true;
    });
    
  }

  onChkChange(ob: MatCheckboxChange) {
    console.log("checked: " + ob.checked);
    if(ob.checked==true)
    {
  //  let event:any=1
    this.model.distributorinventory=1
   // this.dataSource.filter =event
    }
    else{
      this.model.distributorinventory=undefined
    }
    
 } 
}
