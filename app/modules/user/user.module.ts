import '@angular/flex-layout/bundles/flex-layout.umd.js'

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BrowserModule } from "@angular/platform-browser"

import * as components from './components'
import routes from './user.routes'
import UserService from './services'
import LoginModule from '../login'
import { CommonModule } from '../common'
import { EditFormDeactive } from './guards'

@NgModule({
    declarations: [components.UserDetailsComponent, components.UsersListComponent, components.RootUserComponent, components.UserRacesComponent, components.EditComponent],
    imports: [RouterModule.forChild(routes), BrowserModule, LoginModule, CommonModule],
    providers: [UserService, EditFormDeactive]
})

export default class UserModule {

}