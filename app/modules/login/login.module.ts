import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms'

import '@angular/flex-layout/bundles/flex-layout.umd.js'

import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'


import { LoginGuard } from './guards'
import { LoginService } from './services'
import { LoginComponent } from './components'
import routes from './login.route'

@NgModule({
    providers: [LoginService, LoginGuard],
    imports: [RouterModule.forChild(routes), BrowserModule, FormsModule, MaterialModule, FlexLayoutModule],
    declarations: [LoginComponent]
})

export default class LoginModule {

}