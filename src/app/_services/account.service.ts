import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';


@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User | null>;
    public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<any>(localStorage.getItem('isAdmin'));
    public user: Observable<User | null>;
    auth_token: any;
  evasId = new Subject();
   
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(JSON.stringify(localStorage.getItem('userData')!)));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }
    login(evasid: string, password: string): Observable<any> {
        const loginData = { evasid, password };
        return this.http.post<any>(`${environment.apiBase}login/`, loginData);
       
      }
    forgotPassword(evasId: string, email: string): Observable<any> {
        return this.http.post<User>(`${environment.apiBase}send-reset-password-email/`, { evasId, email })
            .pipe(map(user => {
                console.log(user)
                return user;
            }));
    }

resetPassword(password:string,password2:string):Observable<any>{
    let token:any=localStorage.getItem('token')
    
    console.log(token)

    return this.http.post<User>(`${environment.apiBase}changepassword/`, { password, password2 })
    .pipe(map(user => {
        console.log(user)
        return user;

    }));

}
changePassword(password:string,password2:string):Observable<any>{
    let token:any=localStorage.getItem('token')
    
    console.log(token)

    return this.http.post<User>(`${environment.apiBase}changepassword/`, { password, password2 })
    .pipe(map(user => {
        console.log(user)
        return user;

    }));

}
    logout(type?:string) {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        if(type=='en'){
        this.router.navigate(['/account/login']);
        }
        if(type=='jp'){
            this.router.navigate(['account/loginJapanTranslation']);
            }
    }

   

    getAll() {
        return this.http.get<User[]>(`${environment.apiBase}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiBase}users/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiBase}users/${id}`, params)
            .pipe(map(x => {

                if (id == this.userValue?.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiBase}users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }


}