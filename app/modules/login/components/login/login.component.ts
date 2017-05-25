import { Component } from '@angular/core'
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'

import { LoginService } from '../../services'

@Component(
    {
        selector: 'login-component',
        template: require('./login.html')
    })

export default class LoginComponent {
    userId;
    password;
    constructor(private loginService: LoginService, private route: Router, private activatedRoute : ActivatedRoute) {
        this.userId = '';
    }


    login(formRef) {
        this.loginService.login().subscribe(() => {
            console.log(this.loginService.redirectUrl)
            let navigationExtras: NavigationExtras = {
                preserveQueryParams: true,
                preserveFragment: true,
                relativeTo: this.activatedRoute.root
            };

            this.route.navigate([this.loginService.redirectUrl], navigationExtras)
        })
    }


}

LoginComponent.parameters = [LoginService, Router,ActivatedRoute]