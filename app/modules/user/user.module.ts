import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'

import * as components from './components'
import routes from  './user.routes'


@NgModule({
    declarations: [components.UserDetails, components.UsersListComponent],
    imports:[RouterModule.forChild(routes)]
})

export default class UserModule {

}