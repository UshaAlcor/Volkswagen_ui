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

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
