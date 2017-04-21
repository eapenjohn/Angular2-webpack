import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'

import * as components from './components'
import routes from  './user.routes'
import {MaterialModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout'


@NgModule({
    declarations: [components.UserDetailsComponent, components.UsersListComponent,components.RootUserComponent],
    imports:[RouterModule.forChild(routes),MaterialModule.forRoot(), FlexLayoutModule],
    //bootstrap:[components.RootUserComponent]
})

export default class UserModule {

}