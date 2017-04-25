import {ActivatedRoute} from '@angular/router'

import { Component } from '@angular/core'
import './user.details.scss'
import UserService from '../../services'


@Component({
    selector: 'user-deatils',
    template: require('./user.details.html'),
  //  styleUrls: ['user.details.scss']
})

export default class UserDetailsComponent
{
  user;
  activatedRoute:ActivatedRoute;
  userservice :UserService;
  sub;
   constructor(route : ActivatedRoute, userservice:UserService)
   {
    this.activatedRoute= route;
    this.userservice= userservice;
   }

   ngOnInit()
   {
    // alert(this.activatedRoute)
    this.sub= this.activatedRoute.params.subscribe((params)=>{
      // alert(params.id)
   this.userservice.getById(params.id).subscribe(data=> {
  this.user= data;
     })
     console.log(this.user)
     })
   }

}

UserDetailsComponent['parameters']=[ActivatedRoute,UserService]