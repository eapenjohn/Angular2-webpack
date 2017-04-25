import { Component } from '@angular/core'
import UserService from '../../services'

@Component({
    selector:'users-list',
    template: require('./userList.html')
})

export default class UsersListComponent
{
    users=[];
    constructor(public userService:UserService)
    {
    //  console.log( userService.get());
    }

   ngOnInit(){
     this.userService.get().subscribe((data)=>{
        this.users=data
     });
   }
}

UsersListComponent['parameters'] =[UserService]
