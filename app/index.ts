import '@angular/material/core/theming/prebuilt/indigo-pink.css';
import 'hammerjs';
import RootRouterModule  from './modules/routing'
import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic'

import {
    HomeModule
} from './modules/home/home.module'

platformBrowserDynamic().bootstrapModule(RootRouterModule);

