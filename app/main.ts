import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic'

import {
    HomeModule
} from './components/home/home.module'

platformBrowserDynamic().bootstrapModule(HomeModule);