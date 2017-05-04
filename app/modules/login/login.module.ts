import { NgModule } from '@angular/core'

import { LoginGuard } from './guards'
import { LoginService } from './services'

@NgModule({
    providers: [LoginService,LoginGuard]
})

export default class LoginModule {

}