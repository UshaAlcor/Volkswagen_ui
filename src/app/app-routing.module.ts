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
  // this url is to open the pdf page and after clicking on download or printpdf it will open in a new window
 //this is for Japnanese version
  {
    path:'printDetail',
    component: PrintPdfComponent
  },
  //this url is for Japanese version but after clicking on download and print pdf it open ina new tab
  {
    path:'printDetail/tab',
    component: PrintPdfComponent
  },
  //this url is for english version and after clicking on download or print it will open in a new window
  {
    path:'printDetailEng',
    component: PrintPdfEngComponent
 
  },
   //this url is for english version and after clicking on download or print it will open in a new tab
 
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
