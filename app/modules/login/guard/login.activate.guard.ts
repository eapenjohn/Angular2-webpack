import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router'

import {
    Observable,
    Subject
} from 'rxjs/Rx'

import {
    LoginService,
    ILoginService
} from '../service'

export class LoginActivateGuard implements CanActivate {

    constructor(private router: Router, private loginservice: ILoginService) {

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        if (!this.loginservice.login()) {
            this.router.navigate(['/login']);
        }
        return true;
    }


}

LoginActivateGuard['parameters'] = [Router, LoginService]