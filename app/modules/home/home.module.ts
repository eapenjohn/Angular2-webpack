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
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy
} from '@angular/common'

import {
    HomeComponent
}
from './home.component'

import {
    RootComponent
}
from './root/root.component'

import {
    routing
} from './routes'

import {
    DatasetModule
} from '../dataset/dataset.module'

import {
    CommonModule
} from '../common/common.module'

import {
    LoginModule
} from '../login'

import {
    AdvertiseComponent
}
from './advertise/advertise.component'


// import {
//     Dataset
// } from '../mockups/api/dataset'

@NgModule({
    imports: [BrowserModule, routing, RouterModule,
        HttpModule, DatasetModule, LoginModule,
        CommonModule
    ],
    // declarations: [HomeComponent, AdvertiseComponent, RootComponent, Dataset],
    declarations: [HomeComponent, AdvertiseComponent, RootComponent],
    bootstrap: [HomeComponent],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }]
})

export class HomeModule {

}