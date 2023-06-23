import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient: any;
  loginUser: any;
  pdfImg: any;
  pdfFile:any
  printpdfData:any;
  alertPdfData: any;
  searchResponse: any;
  printPDF: any
  selectedCar: any;

  constructor(private http: HttpClient) { }

  // public Base_URL = "http://localhost:8000/";
  headers = { 'content-type': 'application/JSON' }
  params = { '[param: string]': 'string | number | boolean' }
  customerInfo$ = new BehaviorSubject<any>('');

  public getDataWithParams(url: string, params?: HttpParams) {
    return this.httpClient.get('${BaseURL}${url}', { params });
  }


  public postDataWithHeader(url: string, body: any, params?: HttpParams, headers?: HttpHeaders) {
    return this.httpClient.post('${BaseURL}${url}', body, { headers, params, responseType: 'json' });
  }

  public postDataWithParams(url: string, body: any, params?: HttpParams, headers?: HttpHeaders) {
    return this.httpClient.post('${BaseURL}${url}', body, { headers, params, responseType: 'text' });
  }

  informationUser(user: Array<String>) {
    return this.http.get(
      environment.apiBase + 'CustInfo/',
    );
  }


  usedCars(usedCar: any) {
    let queryParams = new HttpParams();
    if(usedCar){
      if(usedCar.dealercode!=undefined){
    queryParams = queryParams.append('dealercode', usedCar.dealercode);
      }
      if(usedCar.sortno!=undefined){
    queryParams = queryParams.append('sortno', usedCar.sortno);
      }
      if(usedCar.carname!=undefined){
    queryParams = queryParams.append('carname', usedCar.carname);
      }
      if(usedCar.gradename!=undefined){
    queryParams = queryParams.append('gradename', usedCar.gradename);
      }
      if(usedCar.modelyear!=undefined){
    queryParams = queryParams.append('modelyear', usedCar.modelyear);
      }
      if(usedCar.colorcode!=undefined){
    queryParams = queryParams.append('colorcode', usedCar.colorcode);
      }
      if(usedCar.Mileage!=undefined){
        queryParams = queryParams.append('Mileage', usedCar.Mileage);
          }
          if(usedCar.expiredateofinsp !=undefined){
            queryParams = queryParams.append('expiredateofinsp ', usedCar.expiredateofinsp );
              }
              if(usedCar.bodyno!=undefined){
                queryParams = queryParams.append('bodyno', usedCar.bodyno);
                  }
                  if(usedCar.salesprice!=undefined){
                    queryParams = queryParams.append('salesprice', usedCar.salesprice);
                      }
                      if(usedCar.typecode!=undefined){
                        queryParams = queryParams.append('typecode', usedCar.typecode);
                          }
      
    }
    //let url = environment.apiBase + 'displaycar/';
    let url = environment.apiBase + 'search/';
    return this.http.get<any>(url, { params: queryParams });
   
  }

  preCars(user: Array<String>) {
    return this.http.get(
      environment.apiBase + 'preorder',
    );
  }

  vehicleSelection(vehicle:any) {
    
    let queryParams = new HttpParams();
    if(vehicle){
      if(vehicle.colorname!=undefined){
    queryParams = queryParams.append('colorname', vehicle.colorname);
      }
      if(vehicle.colorcode!=undefined){
    queryParams = queryParams.append('colorcode', vehicle.colorcode);
      }
      if(vehicle.interiorname!=undefined){
    queryParams = queryParams.append('interiorname', vehicle.interiorname);
      }
      if(vehicle.interiorcode!=undefined){
    queryParams = queryParams.append('interiorcode', vehicle.interiorcode);
      }
      if(vehicle.distributorinventory!=undefined){
    queryParams = queryParams.append('distributorinventory', vehicle.distributorinventory);
      }
      if(vehicle.vehiclepriceintax!=undefined){
    queryParams = queryParams.append('vehiclepriceintax', vehicle.vehiclepriceintax);
      }
      if(vehicle.storeinventory!=undefined){
        queryParams = queryParams.append('storeinventory', vehicle.storeinventory);
          }
      
    }
    //let url = environment.apiBase + 'displaycar/';
    let url = environment.apiBase + 'carprice/';
    return this.http.get<any>(url, { params: queryParams });

  }
  

  
  selectedVehicle() {
    return this.http.get(
      environment.apiBase + 'selectcar/',
    );
  }

  conditionalVehicle(user:any) {
 
 
    let queryParams = new HttpParams();
    if(user){
      if(user.modelyear!=undefined){
    queryParams = queryParams.append('modelyear', user.modelyear);
      }
      if(user.modelcategory!=undefined){
    queryParams = queryParams.append('modelcategory', user.modelcategory);
      }
      if(user.gradename!=undefined){
    queryParams = queryParams.append('gradename', user.gradename);
      }
      if(user.modelcode!=undefined){
    queryParams = queryParams.append('modelcode', user.modelcode);
      }
      if(user.typecode!=undefined){
    queryParams = queryParams.append('typecode', user.typecode);
      }
      if(user.prcodes!=undefined){
    queryParams = queryParams.append('prcodes', user.prcodes);
      }
    }
    let url = environment.apiBase + 'carprice/';
    return this.http.get<any>(url, { params: queryParams });

  }
  


  newCars(newCar:any) {
    let queryParams = new HttpParams();
    if(newCar){
   
      if(newCar.modelyear!=undefined){
    queryParams = queryParams.append('modelyear', newCar.modelyear);
      }
      if(newCar.modelcategory!=undefined&&newCar.modelcategory!=""){
    queryParams = queryParams.append('modelcategory', newCar.modelcategory);
      }
      if(newCar.grade!=undefined&&newCar.grade!=""){
    queryParams = queryParams.append('grade', newCar.grade);
      }
      if(newCar.modelcode!=undefined&&newCar.modelcode!=""){
    queryParams = queryParams.append('modelcode', newCar.modelcode);
      }
      if(newCar.commissionno!=undefined){
    queryParams = queryParams.append('commissionno', newCar.commissionno);
      }
      if(newCar.VINnumber!=undefined){
    queryParams = queryParams.append('VINnumber', newCar.VINnumber);
      }
      if(newCar.distributorinventory!=undefined&&newCar.distributorinventory!=""){
        queryParams = queryParams.append('distributorinventory', newCar.distributorinventory);
          }
          if(newCar.stockinventory!=undefined&&newCar.stockinventory!=""){
            queryParams = queryParams.append('stockinventory', newCar.stockinventory);
              }
      
    }
    let url = environment.apiBase + 'newcarfilter/';
    return this.http.get<any>(url, { params: queryParams });
  }

  infoUser(user: Array<String>) {

    return this.http.post(
      environment.apiBase + 'Detail',
      {
        Kananame: user[0],
        Kanalastname: user[1]
      },
      {
        'headers': this.headers, responseType: 'json'
      },
    );
  }

  Kanalastname: HttpParams | { [param: number]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined;

  registerUser(user: Array<String>) {

    return this.http.post(
      environment.apiBase + 'CustInfo/',
      {
        kanjiname: user[0],
        kanjilastname: user[1],
        kananame: user[2],
        kanalastname: user[3],
        dob: user[4],
        email: user[5],
        gender: user[6],
        cell1: user[7],
        cell2: user[8],
        add1: user[9],
        add2: user[10],
        add3: user[11],
        phone1: user[12],
        phone2: user[13],
        phone3: user[14]
      },
      {
        'headers': this.headers, params: this.Kanalastname, responseType: 'json'
      },
    );
  }
  id: HttpParams | { [param: number]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined;

  updateUser(id: number, user?: any) {
    return this.http.post(
      environment.apiBase + 'Update/' + id, user,
      {
        'headers': this.headers, responseType: 'json'
      },
    );
  }
  deleteUser(id: number) {
    return this.http.delete(
      environment.apiBase + 'Delete/' + id
    );
  }
 
  getSearchByparam(criteria: any,search?:any) {
    
if(search){
search=search
}else{
  search="search"
}
    let queryParams = new HttpParams();
    queryParams = queryParams.append(search, criteria);
    let url = environment.apiBase + 'search/';
    return this.http.get<any>(url, { params: queryParams });

  }
  getCarPriceSearchByparam(criteria: any,search?:any) {
    
    if(search){
    search=search
    }else{
      search="search"
    }
        let queryParams = new HttpParams();
        queryParams = queryParams.append(search, criteria);
        let url = environment.apiBase + 'carprice/';
        return this.http.get<any>(url, { params: queryParams });
    
      }
      getNewCarSearchByparam(criteria: any,search?:any) {
    
        if(search){
        search=search
        }else{
          search="search"
        }
            let queryParams = new HttpParams();
            queryParams = queryParams.append(search, criteria);
            let url = environment.apiBase + 'newcarfilter/';
            return this.http.get<any>(url, { params: queryParams });
        
          }
   
  getCustInfo(id?:any): Observable<any> {
    return this.http.get(
      environment.apiBase + 'CustInfo/',
    );
  }
//   getSearchByparam(criteria:any,search,custinfo?:any)
//   {

//     let queryParams = new HttpParams();
//     queryParams = queryParams.append(criteria,search);
//     if(custinfo.kanjiname){
//     queryParams = queryParams.append("kanjiname",custinfo.kanjiname);
//     }
//     if(custinfo.kanjilastname){
//     queryParams = queryParams.append("kanjilastname",custinfo.kanjilastname);
//     }
//     if(custinfo.kananame){
//     queryParams = queryParams.append("kananame",custinfo.kananame);
//     }
//     if(custinfo.dob){
//     queryParams = queryParams.append("dob",custinfo.dob);
//     }
//     if(custinfo.gender){
//     queryParams = queryParams.append("gender",custinfo.gender);
//     }
//     if(custinfo.email){
//     queryParams = queryParams.append("email",custinfo.email);
//     }
//     if(custinfo.cell1){
//     queryParams = queryParams.append("cell1",custinfo.cell1);
//     }
//     if(custinfo.add1){
//     queryParams = queryParams.append("add1",custinfo.add1);
//     }
//     if(custinfo.add2){
//     queryParams = queryParams.append("add2",custinfo.add2);
//     }
//      if(custinfo.add3){
//     queryParams = queryParams.append("add3",custinfo.add3);
//      }
//      if(custinfo.phone1){
//     queryParams = queryParams.append("phone1",custinfo.phone1);
//      }
//      if(custinfo.phone2){
//     queryParams = queryParams.append("phone2",custinfo.phone2);
//      }
//      if(custinfo.phone3){

//     queryParams = queryParams.append("phone3",custinfo.phone3);
//      }
    


//  let url=this. + 'search/';
//     return this.http.get<any>(url,{params:queryParams});

//   }
saveSelectedCar(selectedCars: any) {

  return this.http.post(
    environment.apiBase + 'selectcar/',JSON.stringify(selectedCars),
  
    {
      'headers': this.headers,  responseType: 'json'
    },
  );
}

}
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

//..selectcar

