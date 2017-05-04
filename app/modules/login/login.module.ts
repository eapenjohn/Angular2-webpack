import { NgModule } from '@angular/core'

import { LoginGuard } from './guards'
import { LoginService } from './services'
import {LoginComponent} from './components'

@NgModule({
    providers: [LoginService,LoginGuard],
    declarations:[LoginComponent]
})

export default class LoginModule {

}