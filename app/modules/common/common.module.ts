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
    providers: [Dataset, {
        provide: Http,
        useFactory: (Dataset, defaultOptions: RequestOptions) => new HttpInterceptor(Dataset, defaultOptions),
        deps: [Dataset, RequestOptions]
    }]

})

export class CommonModule {

}