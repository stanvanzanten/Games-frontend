import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../app/services/login.service'

@Injectable({
    providedIn: 'root'
})

export class LoggedInGuard implements CanActivate {

    constructor(private loginService: LoginService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const is = this.loginService.isAuth()
        console.log(is)
        return is
    }
}
