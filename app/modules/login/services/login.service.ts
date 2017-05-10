
import {Injectable} from "@angular/core"
import {Observable} from 'rxjs/Observable'


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export default class LoginService
{
    loggedIn=false;
    redirectUrl ='';
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