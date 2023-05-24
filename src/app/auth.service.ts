import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient: any;
  loginUser: any;
  
  constructor(private http: HttpClient) { }

 // public Base_URL = "http://localhost:8000/";
  headers = { 'content-type': 'application/JSON' }
  params =  {'[param: string]': 'string | number | boolean'}
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
      environment.apiBase + 'CustInfo',
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
        'headers': this.headers,responseType: 'json'
      },
    );
  }

  Kanalastname: HttpParams | { [param: number]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined;

  registerUser(user: Array<String>) {

    return this.http.post(
      environment.apiBase + 'CustInfo',
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
        'headers': this.headers,params: this.Kanalastname, responseType: 'json'
      },
    );
  }

  updateUser(user: Array<String>) {

    return this.http.post(
      environment.apiBase + 'Update',
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
        'headers': this.headers, responseType: 'json'
      },
    );
  }

  searchKey(key: Array<String>) {
    return this.http.post(
      environment.apiBase + 'Search',
      {
        searchk: key[0],
      },
      {
        'headers': this.headers, responseType: 'json'
      },
    );
  }

 

}
