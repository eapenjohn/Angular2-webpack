import {
    Component
} from '@angular/core'

var Config = require('config')

import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms'
@Component({
    selector: 'login-form',
    template: require('./login.html')
})

export class LoginComponent {
    loginForm;

    constructor() {
        alert(Config.AUTH_URL)
        this.loginForm = new FormGroup({
            email: new FormControl("", [Validators.required]),
            password: new FormControl('', Validators.required)
        })
    }

    login() {
        alert('s')

    }
}