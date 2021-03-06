import { Component } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs'
import {UserService} from '../../services'

@Component({
    selector:'users-list',
    template: require('./userList.html')
})

export default class UsersListComponent
{
    users :Observable<[any]>;
    constructor(public userService:UserService, public route:ActivatedRoute)
    {
    }

   ngOnInit(){
   this.users=   this.route.params.switchMap(()=>{
        return this.userService.get();
    })
   }
}

UsersListComponent['parameters'] =[UserService, ActivatedRoute]
