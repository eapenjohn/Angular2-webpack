import { Router } from '@angular/router'
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'

import { LoginService } from '../../services'

export default class LoginGuard implements CanActivate {

    _loginService: LoginService;
    _url;
    _route :Router;
    constructor(loginService: LoginService, route: Router) {
        this._loginService = loginService;
        this._route= route;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this._url = state.url;
        if (!this._loginService.loggedIn) {
            this._loginService.redirectUrl= state.url;
            this._route.navigate(['/login'])
            return false;;
        }
        return true;
    }
}

LoginGuard.parameters = [LoginService, Router];