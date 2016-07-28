import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router"

import {
    Injectable
} from "@angular/core"


import {
    Observable
} from 'RxJS/RX'

@Injectable()
export class TestGuard implements CanActivate {

    constructor() {}

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        // var promise = new Promise < boolean > (    )
        // return Promise.resolve(true);
        //return Observable.of(true);
        return true;;

        // return new Promise < boolean > ((resolve) => {
        //     resolve(true)
        // })
    }

}