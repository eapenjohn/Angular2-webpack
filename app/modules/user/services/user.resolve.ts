
import { Injectable } from '@angular/core'
import { Resolve, Router } from '@angular/router'
import { ActivatedRouteSnapshot, RouterState } from '@angular/router'
import { Observable } from 'rxjs'


import UserService from './user.service'
import { User } from '../models'

@Injectable()
export default class UserResolver implements Resolve<User>
{
    constructor(private userService: UserService, private route: Router) {

    }
    resolve(activateRoute: ActivatedRouteSnapshot, state: RouterState) {
        let id = activateRoute.params.id;
        if (!id) return Observable.of(new User())
        return this.userService.getById(+id).map((user) => {
            if (user) {
                return user;
            }
        })

    }
}

UserResolver['parameters'] = [UserService, Router]