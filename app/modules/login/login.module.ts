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


@NgModule({
    imports: [RouterModule, routing],
    declarations: [LoginComponent]
})

export class LoginModule {

}