import { ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable'
import { Component } from '@angular/core'

import './user.details.scss'
import UserService from '../../services'


@Component({
  selector: 'user-deatils',
  template: require('./user.details.html'),
  //  styleUrls: ['user.details.scss']
})

export default class UserDetailsComponent {
  user:any;
  activatedRoute: ActivatedRoute;
  userservice: UserService;
  sub;
  constructor(route: ActivatedRoute, userservice: UserService) {
    this.activatedRoute = route;
    this.userservice = userservice;
  }

  ngOnInit() {
    // alert(this.activatedRoute)
    this.activatedRoute.params.switchMap((params) => {
      // alert(params.id)
      return this.userservice.getById(+params['id']);
      //  console.log(this.user)
    }).subscribe((data) =>
    { console.log(data);  this.user = data })
  }

}

UserDetailsComponent['parameters'] = [ActivatedRoute, UserService]