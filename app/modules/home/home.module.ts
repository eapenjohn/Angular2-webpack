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

import {HomeComponent, AdvertiseComponent, RootComponent, PageNotFoundComponent}
from './components'

import UserModule from '../user'

// import {
//     routing
// } from './routes'



@NgModule({
    imports: [MaterialModule.forRoot(),BrowserModule, BrowserAnimationsModule, RouterModule, HttpModule,FlexLayoutModule,UserModule],
    declarations: [ HomeComponent, AdvertiseComponent, RootComponent,PageNotFoundComponent],
   // bootstrap: [ components.HomeComponent],
    // providers: [{
    //     provide: LocationStrategy,
    //     useClass: HashLocationStrategy
    // }]
})

export default  class HomeModule {

}