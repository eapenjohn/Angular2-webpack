import { CanActivate, RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router'

import { LoginService } from '../../services'

export default class LoginGuard implements CanActivate {

    _loginService: LoginService;
     _url;
    constructor(loginService: LoginService) {
        this._loginService = loginService;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(this._loginService.loggedIn)
        console.log('login guard called');
        this._url=state.url;
    //    if(! this._loginService.loggedIn)
    //    {
    //       return false;;
    //    }
        return true;
    }
}

LoginGuard.parameters = [LoginService];