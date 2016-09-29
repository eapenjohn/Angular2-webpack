import {
    Injectable
} from '@angular/core'


@Injectable()
export class LoginService implements ILoginService {
    constructor() {

    }

    login() {
        return false;
    }
}

export interface ILoginService {
    login();
}