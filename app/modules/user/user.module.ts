import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'

import * as components from './components'
import routes from  './user.routes'
import {MaterialModule} from '@angular/material'


@NgModule({
    declarations: [components.UserDetailsComponent, components.UsersListComponent],
    imports:[RouterModule.forChild(routes)]
})

export default class UserModule {

}