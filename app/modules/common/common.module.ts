import {
    NgModule
} from '@angular/core'

import {
    Http,
    XHRBackend,
    RequestOptions
} from '@angular/http'

import {
    MockBackend
} from '@angular/http/testing'

import {
    HttpInterceptor
} from './http.interceptor'

// import {
//     Dataset
// } from '../mockups/api/dataset'

// @NgModule({
//     providers: [Dataset, {
//         provide: MockBackend,
//         useFactory: () => new Dataset()
//     }, {
//         provide: Http,
//         useFactory: (MockBackend, defaultOptions: RequestOptions) => new HttpInterceptor(MockBackend, defaultOptions),
//         deps: [MockBackend, RequestOptions]
//     }]

// })

import {
    MockModule
} from '../mockups/'

@NgModule({
    imports: [MockModule],
    providers: [{
        provide: Http,
        useClass: HttpInterceptor,
        deps: [XHRBackend, RequestOptions]

    }]

})

export class CommonModule {
    constructor() {

    }

}