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

interface modelyear {
  value: string;
  viewValue: string;
}

interface modelcategory {
  value: string;
  viewValue: string;
}

interface modelgrade {
  value: string;
  viewValue: string;
}

interface modelcode {
  value: string;
  viewValue: string;
}

interface modeltype {
  value: string;
  viewValue: string;
}

interface modelprcode {
  value: string;
  viewValue: string;
}
export interface vehicle {
  colorname : String;
  colorcode:String;
  interiorname:String;
  interiorcode : any;
  vehiclepriceintax:any,
      distributorinventory:any,
      storeinventory:any
   }

@Component({
  selector: 'app-vehicleselection',
  templateUrl: './vehicleselection.component.html',
  styleUrls: ['./vehicleselection.component.css']
})
export class VehicleselectionComponent {
  displayedColumns: string[] = ['colorname','colorcode', 'interiorname', 'interiorcode','bodyprice','distributorstock','inventory'];
  dataSource: any;
  selectedtypeValue!: string;
  selectedprValue!: string;
  selectedyearValue!: string;
  selectedcodeValue!: string;
  selectedgradeValue!: string;
  selectedcategoryValue!: string;
  selectedValue!: string;
  selectedCar!: string;
  // dataSource :any[];
  userData: any;
  @ViewChild(MatSort) sort: MatSort | undefined;

  inforesponse: any[] = [];

  auth: any;
  model: vehicle={
    colorname: undefined,
    colorcode: undefined,
    interiorname: undefined,
    interiorcode: undefined,
    vehiclepriceintax: undefined,
    distributorinventory: undefined,
    storeinventory: undefined
  }

  constructor(private httpClient: HttpClient, public dialog: MatDialog, private loginAuth: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    //this.userData = users;
  }

  

  year: modelyear[] = [
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
    {value: '2023', viewValue: '2023'},
  ];

  category : modelcategory[] = [
    {value: 'S4AV', viewValue: 'S4AV'},
    {value: 'SQ2', viewValue: 'SQ2'},
    {value: 'A3SB', viewValue: 'A3SB'},
  ];

  
  grade : modelgrade[] = [
    {value: '30TADVANCED', viewValue: '30TADVANCED'},
    {value: '30T', viewValue: '30T'},
    {value: '31TADVANCED', viewValue: '31TADVANCED'},
   
  ];

  code : modelcode[] = [
    {value: '8YABKG', viewValue: '8YABKG'},
    {value: '8W5S4A', viewValue: '8W5S4A'},
    {value: 'GABS2Y', viewValue: 'GABS2Y'},
   
  ];

  type : modeltype[] = [
    {value: 'A01', viewValue: 'A01'},
    {value: 'A02', viewValue: 'A02'},
    {value: 'A03', viewValue: 'A03'},
  ];

  prcode : modelprcode[] = [
    {value: 'PX2 WB9 WHJ', viewValue: 'PX2 WB9 WHJ'},
    {value: '5TD 9VS N4F W1I W1J WB9 WL6', viewValue: '5TD 9VS N4F W1I W1J WB9 WL6'},
    {value: 'WB9', viewValue: 'WB9'},
  ];

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
    let id:any
    console.log(this.updateForm)
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

  terminatealert(): void {
    
    alert('選択済車両の情報がクリアされますが、よろしいですか？');
    
  }
  
  applyFilterSearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.loginAuth.getCarPriceSearchByparam([filterValue

    ]).subscribe((res: any) => {
      this.dataSource=res
  console.log(res)
    })
  
    // console.log(filterValue)
    // this.dataSource.filter = filterValue.trim().toLowerCase();
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
    let model={}
    //colorname
    //colorcode
    //interiorname
    //interior code
    //Vehicle Body Price
    //No. of Distributors in Stock 
    //Store Inventory Quantity
    
     model={
      colorname:this.model.colorname,
      colorcode:this.model.colorcode,
      interiorname:this.model.interiorname,
      interiorcode:this.model.interiorcode,
      vehiclepriceintax:this.model.vehiclepriceintax,
      distributorinventory:this.model.distributorinventory,
      storeinventory:this.model.storeinventory
    }
    this.loginAuth.vehicleSelection(model).subscribe(
      (data: any) => {
        this.inforesponse = data;
        console.log('information', this.inforesponse);
        // console.log(Object.keys(this.inforesponse[0].id));

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
    
    alert('Are you sure you want to delete the record ?');
    
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


}

