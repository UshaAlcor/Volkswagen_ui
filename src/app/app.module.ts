import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService, MY_DATE_FORMATS } from './auth.service';
import {  MatDialogRef } from '@angular/material/dialog';


import {MAT_DATE_LOCALE} from '@angular/material/core';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import 'moment/locale/ja';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MatMomentDateModule,
} from '@angular/material-moment-adapter';

import {MatDialogModule} from '@angular/material/dialog';
import { SearchFilterPipe } from './search-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './search/search.component';
import { DialogComponent } from './dialog/dialog.component';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { DetailedCustInfoComponent } from './detailed-cust-info/detailed-cust-info.component';
import { TestComponent } from './test/test.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';

import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { GeneratePDFTwoComponent } from './generate-pdftwo/generate-pdftwo.component';

import { PrintDetailTwoComponent } from './print-detail-two/print-detail-two.component';
import { VehicleselectionComponent } from './vehicleselection/vehicleselection.component';
import { ConditionalavailablevehiclesComponent } from './conditionalavailablevehicles/conditionalavailablevehicles.component';
import { VehiclenegotiationComponent } from './vehiclenegotiation/vehiclenegotiation.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { UsedcarsComponent } from './usedcars/usedcars.component';
import { PreorderComponent } from './preorder/preorder.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { CustomRouteReuseStrategy } from './routerReuseStratagy.component';




/* Angular Material */

@NgModule({
  declarations: [
    AppComponent,
   
    LandingPageComponent,
    SearchComponent,
    DialogComponent,
    UpdateinfoComponent,
    ListcustomerComponent,
    TestComponent,
    DetailedCustInfoComponent,
    CustomerInformationComponent,
    SearchFilterPipe,
   
    AlertDialogComponent,
    ConfirmDialogComponent,

    PrintDetailTwoComponent,
   
    GeneratePDFTwoComponent,
         VehicleselectionComponent,
         ConditionalavailablevehiclesComponent,
         VehiclenegotiationComponent,
         VehicleComponent,
         UsedcarsComponent,
         PreorderComponent,
         ApplicationComponent,
         HomeComponent,
         AlertComponent,
  
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatNativeDateModule,
    BrowserAnimationsModule,           // <----- this module will be deprecated in the future version.
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    MatMomentDateModule,
    PdfViewerModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule ,
    MatButtonModule,
    
    
    ],
    entryComponents: [],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
 
  {
    provide:  DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },{
    provide: MatDialogRef,
    useValue: {}
  },
   { provide: MAT_DATE_FORMATS, useValue:MY_DATE_FORMATS },
    AuthService],
  
   
  bootstrap: [AppComponent]
})
export class AppModule { }
