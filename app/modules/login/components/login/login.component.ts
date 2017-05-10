import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { LoginService } from '../../services'

@Component(
    {
        selector: 'login-component',
        template: require('./login.html')
    })

export default class LoginComponent {
    userId;
    password;
    constructor(private loginService: LoginService, private route: Router) {
     this.userId='';
    }


    login(formRef) {
      this.loginService.login().subscribe(()=>{
      console.log(this.loginService.redirectUrl)
          
         this.route.navigate([this.loginService.redirectUrl])
      })
    }


}

LoginComponent.parameters = [LoginService,Router]