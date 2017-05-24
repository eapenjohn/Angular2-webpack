
import {Injectable} from '@angular/core'
import { Resolve } from '@angular/router'
import { ActivatedRouteSnapshot, RouterState } from '@angular/router'
import { Observable } from 'rxjs'


import UserService from './user.service'
import { User } from '../models'

@Injectable()
export default class UserResolver implements Resolve<User>
{
    constructor(private userService: UserService) {

    }
    resolve(activateRoute: ActivatedRouteSnapshot, state: RouterState) {
        let id = activateRoute.params.id;

          return this.userService.getById(+id)
        
    }
}

 UserResolver['parameters']= [UserService]