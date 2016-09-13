import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router"

import {
    Injectable
} from "@angular/core"


import {
    Observable,
    Subject
} from 'rxjs/Rx'


@Injectable()
export class TestGuard implements CanActivate {

    constructor() {}

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        // var promise = new Promise < boolean > (    )
        // return Promise.resolve(true);
        //return Observable.of(true);
        var sub = new Subject < boolean > ()

        setTimeout(() => {
            sub.next(true);
            sub.complete()
        }, 10000)
        return sub;;

        // return new Promise < boolean > ((resolve) => {
        //     resolve(true)
        // })
    }

}