import {
    NgModule
} from '@angular/core'

import {
    RouterModule
} from '@angular/router'

import {
    LoginComponent
} from './components'

import {
    routing
} from './routes'

import {
    LoginActivateGuard
} from './guard'


@NgModule({
    imports: [RouterModule, routing],
    declarations: [LoginComponent],
    providers: [LoginActivateGuard]
})

export class LoginModule {

}