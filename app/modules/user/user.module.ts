import '@angular/flex-layout/bundles/flex-layout.umd.js'

import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'
import {MaterialModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout'
import {BrowserModule} from "@angular/platform-browser"
import * as components from './components'
import routes from  './user.routes'
import UserService from './services'


@NgModule({
    declarations: [components.UserDetailsComponent, components.UsersListComponent,components.RootUserComponent, components.UserRacesComponent],
    imports:[RouterModule.forChild(routes),MaterialModule.forRoot(),BrowserModule, FlexLayoutModule],
    //bootstrap:[components.RootUserComponent]
    providers:[UserService]
})

export default class UserModule {

}