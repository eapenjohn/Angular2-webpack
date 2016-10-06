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

import {
    Dataset
} from '../mockups/api/dataset'

@NgModule({
    // declarations: [Dataset],

    providers: [{
        provide: Http,
        useFactory: (backend, defaultOptions: RequestOptions) => new HttpInterceptor(backend, defaultOptions),
        deps: [MockBackend, RequestOptions]
    }]

})

export class CommonModule {

}