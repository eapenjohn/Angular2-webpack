import { Component } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { Observable } from 'rxjs/Observable'

import UserService from '../../services'

@Component({
    selector:'users-list',
    template: require('./userList.html')
})

export default class UsersListComponent
{
    users :Observable<any[]>;
    constructor(public userService:UserService, public route:ActivatedRoute)
    {
    //  console.log( userService.get());
    }

   ngOnInit(){
    //   this.users= this.userService.get().switchMap((data)=>{
    //     this.users=data
    //  });

   this.users=   this.route.params.switchMap(()=>{
        return this.userService.get();
    })
   }
}

UsersListComponent['parameters'] =[UserService, ActivatedRoute]
