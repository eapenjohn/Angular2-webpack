import { Component } from '@angular/core'

import { LoginService } from '../../services'

@Component(
    {
        selector: 'login-component',
        template: require('./login.html')
    })

export default class LoginComponent {
    userId;
    password;
    constructor(loginService: LoginService) {
     this.userId='';
    }


    login(userId, parameters) {
        alert(userId)
    }


}

LoginComponent.parameters = [LoginService]