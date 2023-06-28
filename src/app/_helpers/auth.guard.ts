import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
interface CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  }
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = JSON.parse(localStorage.getItem('userData')||'{}');
        console.log(user)
        if (user) {
            console.log(true)
            // authorised so return true
            return true;
          
        }

        // not logged in so redirect to login page with the return url
       this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}