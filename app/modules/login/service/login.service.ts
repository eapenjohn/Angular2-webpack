import {
    Injectable
} from '@angular/core'


@Injectable()
export class LoginService implements ILoginService {
    constructor() {

    }

    login() {
        return true;
    }
}

export interface ILoginService {
    login();
}