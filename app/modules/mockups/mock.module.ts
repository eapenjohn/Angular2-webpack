import {
    NgModule
} from '@angular/core'

import {
    Dataset
} from './api/dataset.ts'

@NgModule({
    providers: [Dataset]
})

export class MockModule {

}