import '@angular/material/core/theming/prebuilt/indigo-pink.css';
import 'hammerjs';

import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic'

import {
    HomeModule
} from './modules/home/home.module'

platformBrowserDynamic().bootstrapModule(HomeModule);

