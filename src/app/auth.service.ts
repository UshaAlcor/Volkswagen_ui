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


  usedCars(user: Array<String>) {
    return this.http.get(
      environment.apiBase + 'usedcar',
    );
  }

  preCars(user: Array<String>) {
    return this.http.get(
      environment.apiBase + 'preorder',
    );
  }

  vehicleSelection(user: Array<String>) {
    return this.http.get(
      environment.apiBase + 'displaycar',
    );
  }

  selectedVehicle(user: Array<String>) {
    return this.http.get(
      environment.apiBase + 'selectcar',
    );
  }

  conditionalVehicle(user: Array<String>) {
    return this.http.get(
      environment.apiBase + 'conditional',
    );
  }


  newCars(user: Array<String>) {
    return this.http.get(
      environment.apiBase + 'newcar',
    );
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

  updateUser(id: number, user: any) {
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
   
  getCustInfo(id:any): Observable<any> {
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
