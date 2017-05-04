
import {Injectable} from "@angular/core"
import {Observable} from 'rxjs/Observable'

@Injectable()
export default class LoginService
{
    loggedIn=false;
    redirectUrl;
    constructor()
    {

    }

    login()
    {
     return Observable.of(true).delay(1000).do(val =>this.loggedIn =true);
    }

    logout()
    {
        this.loggedIn=false;
    }
}