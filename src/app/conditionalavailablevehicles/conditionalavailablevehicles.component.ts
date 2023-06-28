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
import { SelectionModel } from '@angular/cdk/collections';

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


@Component({
  selector: 'app-conditionalavailablevehicles',
  templateUrl: './conditionalavailablevehicles.component.html',
  styleUrls: ['./conditionalavailablevehicles.component.scss']
})
export class ConditionalavailablevehiclesComponent {
  displayedColumns: string[] = ['select','colorname','colorcode', 'interiorname', 'interiorcode','bodyprice','distributorstock','inventory'];
  dataSource: any;
  selectedtypeValue!: string;
  selectedprValue!: string;
  selectedyearValue!: string;
  selectedcodeValue!: string;
  selectedgradeValue!: string;
  selectedcategoryValue!: string;
  selectedCar!: string;
  // dataSource :any[];
  userData: any;
  @ViewChild(MatSort) sort: MatSort | undefined;
  selection = new SelectionModel(true, []);
  inforesponse: any[] = [];
  model:any={}
  auth: any;
  year: modelyear[]=[];
  category : modelcategory[]=[];
  grade : modelgrade[]=[];
  dropdownData: any=[];
  code:  modelcode[]=[];
  type: modeltype[]=[];
  prcode:  modelprcode[]=[];
  selectedRecord: any[];
  constructor(private httpClient: HttpClient, public dialog: MatDialog, private loginAuth: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  removeDuplicates(myArray, Prop) {
    return myArray.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[Prop]).indexOf(obj[Prop]) === pos;
    });
  }
  ngOnInit()
  {
    this.loginAuth.conditionalVehicle(this.model).subscribe(
      (data: any) => {
        this.dropdownData = data;
      
      this.dropdownData.forEach(element => {
      
       this.year.push({value:element.modelyear,viewValue:element.modelyear})
       this.year=this.removeDuplicates(this.year,"value")
       this.category.push({value:element.modelcategory,viewValue:element.modelcategory})
       this.category=this.removeDuplicates(this.category,"value")
       this.grade.push({value:element.gradename,viewValue:element.gradename})
       this.grade=this.removeDuplicates(this.grade,"value")
       this.code.push({value:element.modelcode,viewValue:element.modelcode})
       this.code=this.removeDuplicates(this.code,"value")
       this.type.push({value:element.typecode,viewValue:element.typecode})
       this.type=this.removeDuplicates(this.type,"value")
       this.prcode.push({value:element.prcodes,viewValue:element.prcodes})
       this.prcode=this.removeDuplicates(this.prcode,"value")
        
      });
    })



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
    console.log(this.updateForm);
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
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.loginAuth.getCarPriceSearchByparam([filterValue

    ]).subscribe((res: any) => {
      this.dataSource=res
  console.log(res)
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
    return this.updateForm.get('phone3')as FormControl;
  }
  
  refreshPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.activatedRoute.snapshot.url]);
 }

  information() {
    this.model={
     'modelyear':this.selectedyearValue,
     'modelcategory':this.selectedcategoryValue,
     'gradename':this.selectedgradeValue,
     'modelcode':this.selectedcodeValue,
     'typecode':this.selectedtypeValue,
     'prcodes':this.selectedprValue
    }
    this.loginAuth.conditionalVehicle(this.model).subscribe(
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
  
  selectalert(): void {
    
    alert('Record Selected');
    this.logSelection()
   // this.loginAuth.selectedCar={}
   // this.loginAuth.selectedCar=row;
   // localStorage.setItem('selectedCar',row)
   //this.router.navigate(['/vehiclenegotiation'], {queryParams: row});
   // console.log(this.loginAuth.selectedCar);

    
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

  terminatealert(): void {
    
    alert('選択済車両の情報がクリアされますが、よろしいですか？');
    
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
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    // this.selection.selected.forEach(s =>{
    //   this.selectedRecord=[];
    //   this.selectedRecord=s
    // })
    console.log(this.selection.selected);
    this.loginAuth.saveSelectedCar(this.selection.selected).subscribe(res=>{
      console.log(JSON.stringify(res))
    })
     
  }

}

