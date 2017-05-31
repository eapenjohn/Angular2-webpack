import { Router ,NavigationExtras} from '@angular/router'
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, CanLoad } from '@angular/router'

import { LoginService } from '../../services'

export default class LoginGuard implements CanActivate, CanLoad {

    _loginService: LoginService;
    _url;
    _route: Router;
    constructor( private loginService: LoginService, private route: Router) {
        // this._loginService = loginService;
        // this._route = route;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this._url = state.url;
        if (!this.loginService.loggedIn) {
            this.loginService.redirectUrl = state.url;

            let extras: NavigationExtras = {
                fragment :'anchor1',
                queryParams: {
                    session_id: '42340928340'
                }
            };
            this.route.navigate(['/login'],extras)
            return false;;
        }
        return true;
    }

    canLoad(route: Router)
    {
        return this.loginService.loggedIn;
    }
}

LoginGuard['parameters'] = [LoginService, Router];