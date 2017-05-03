import { CanActivate } from '@angular/router'

export default class LoginGuard implements CanActivate {
    canActivate() {
        console.log('login guard called');
        return true;
    }
}