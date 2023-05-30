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
import { GeneratePdfEngComponent } from './generate-pdf-eng/generate-pdf-eng.component';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';
import { PrintPdfEngComponent } from './print-pdf-eng/print-pdf-eng.component';
import { PrintPdfComponent } from './print-pdf/print-pdf.component';

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
  {
    path:'printDetail',
    component: PrintPdfComponent
  },
  {
    path:'printDetail/tab',
    component: PrintPdfComponent
  },
  {
    path:'printDetailEng',
    component: PrintPdfEngComponent
 
  },
  {
    path:'printDetailEng/tab',
    component: PrintPdfEngComponent
 
  },
  {
    path:'printPdf',
    component: GeneratePdfComponent
 
  },

  {
    path:'printPdf/tab',
    component: GeneratePdfComponent
 
  },
  {
    path:'printPdfeng',
    component: GeneratePdfEngComponent
 
  },
  {
    path:'printPdfeng/tab',
    component: GeneratePdfEngComponent
 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
