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

export class LoginActivateGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        this.router.navigate(['/login']);
        return true;
    }


}

LoginActivateGuard['parameters'] = [Router]