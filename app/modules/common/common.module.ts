import {
    NgModule
} from '@angular/core'

import {
    Http,
    XHRBackend,
    RequestOptions
} from '@angular/http'

import {
    HttpInterceptor
} from './http.interceptor'

@NgModule({
    providers: [{
        provide: Http,
        useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => new HttpInterceptor(backend, defaultOptions),
        deps: [XHRBackend, RequestOptions]
    }]

})

export class CommonModule {

}