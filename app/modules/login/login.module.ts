import {
    NgModule,

} from '@angular/core'

import {
    RouterModule
} from '@angular/router'

import {
    BrowserModule
} from '@angular/platform-browser'

import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms'

import {
    LoginComponent
} from './components'

import {
    routing
} from './routes'

import {
    LoginActivateGuard
} from './guard'

import {
    LoginService
} from './service'



@NgModule({
    imports: [RouterModule, routing, ReactiveFormsModule, FormsModule, BrowserModule],
    declarations: [LoginComponent],
    providers: [LoginActivateGuard, LoginService]
})

export class LoginModule {
    constructor() {

    }

}