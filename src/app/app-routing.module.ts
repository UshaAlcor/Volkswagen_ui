import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchComponent } from './search/search.component';
import { DialogComponent } from './dialog/dialog.component';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { DetailedCustInfoComponent } from './detailed-cust-info/detailed-cust-info.component';
import { TestComponent } from './test/test.component';
import { PrintDetailTwoComponent } from './print-detail-two/print-detail-two.component';
import { VehicleselectionComponent } from './vehicleselection/vehicleselection.component';
import { ConditionalavailablevehiclesComponent } from './conditionalavailablevehicles/conditionalavailablevehicles.component';
import { VehiclenegotiationComponent } from './vehiclenegotiation/vehiclenegotiation.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { UsedcarsComponent } from './usedcars/usedcars.component';
import { PreorderComponent } from './preorder/preorder.component';

const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'dialog',
    component: DialogComponent
  },
  {
    path:'list',
    component: ListcustomerComponent
  },
  {
    path:'info',
    component: CustomerInformationComponent
  },
  {
    path:'detail',
    component: DetailedCustInfoComponent
  },
  {
    path:'test',
    component: TestComponent
  },
  
{
  path:'info/:id',
  component: DetailedCustInfoComponent
},
  {
    path:'update',
    component: UpdateinfoComponent
  },
  // sprint 2

  {
    path:'vehicleselection',
    component: VehicleselectionComponent
  },
  {
    path:'conditionalselection',
    component: ConditionalavailablevehiclesComponent
  },
  {
    path:'vehiclenegotiation',
    component: VehiclenegotiationComponent
  },
  {
    path:'vehiclenew',
    component: VehicleComponent
  },
  {
    path:'usedcar',
    component: UsedcarsComponent

  },
  {
    path:'preorder',
    component: PreorderComponent
  },

 
  //this url is for english version and after clicking on download or print it will open in a new window
 


 
  {
    path:'printDetailTwo',
    component: PrintDetailTwoComponent
  },


  {
    path:'detail',
    component: DetailedCustInfoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
