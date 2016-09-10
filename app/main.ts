import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic'

import {
    DatasetModule
} from './components/dataset/dataset.module'

platformBrowserDynamic().bootstrapModule(DatasetModule);