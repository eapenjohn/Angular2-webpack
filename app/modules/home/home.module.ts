import '@angular/flex-layout/bundles/flex-layout.umd.js'

import {
    NgModule
} from '@angular/core'
import {
    HttpModule
} from '@angular/http'

import {
    RouterModule
} from '@angular/router'

import {
    BrowserModule
} from '@angular/platform-browser'

import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations'

import { FlexLayoutModule} from '@angular/flex-layout'

import {
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy
} from '@angular/common'

import { MaterialModule} from '@angular/material'

import components
from './components'

import UserModule from '../user'

import {
    routing
} from './routes'

import {
    DatasetModule
} from '../dataset/dataset.module'



@NgModule({
    imports: [MaterialModule.forRoot(),BrowserModule, BrowserAnimationsModule, routing, RouterModule, HttpModule, DatasetModule,FlexLayoutModule,UserModule],
    declarations: [ components.HomeComponent, components.AdvertiseComponent, components.RootComponent],
    bootstrap: [ components.HomeComponent],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }]
})

export class HomeModule {

}