import {
    NgModule
} from '@angular/core'

import {
    Dataset
} from './api/dataset.ts'

import {
    XHRBackend,
    RequestOptions,
    Http
} from '@angular/http'

import {
    MockBackend
} from '@angular/http/testing'

@NgModule({
    providers: [Dataset, {
            provide: XHRBackend,
            useFactory: () => new Dataset()
        }
        // , {
        //     provide: MockBackend,
        //     useFactory: () => new Dataset()
        // },
        //  {
        //     provide: Http,
        //     useFactory: (XHRBackend, defaultOptions: RequestOptions) => new Http(XHRBackend, defaultOptions),
        //     deps: [XHRBackend, RequestOptions]

        // }
    ]
})

export class MockModule {


}