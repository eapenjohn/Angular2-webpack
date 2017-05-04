import { CanActivate } from '@angular/router'

import {LoginService} from '../../services'

export default class LoginGuard implements CanActivate {

    _loginService:LoginService;

    constructor(loginService: LoginService) {
this._loginService=loginService;
    }
    canActivate() {
        console.log(this._loginService.loggedIn)
        console.log('login guard called');
        return true;
    }
}

LoginGuard.parameters = [LoginService];