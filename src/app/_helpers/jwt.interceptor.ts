import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AccountService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }




  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var user = JSON.parse(localStorage.getItem('userData')||'{}');

let token:any=user?.token?.access
const re = "/api/user/login"
// || /api/user/send-reset-password-email" ;
// Exclude interceptor for login request
if (request.url.search(re) === -1 ) {
  console.log(request)
    request = request.clone({
      setHeaders: {
        Authorization:  `Bearer ${token}`
      }
    
    });
}

    return next.handle(request);
  
  }
}

