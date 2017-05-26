import '@angular/material/prebuilt-themes/indigo-pink.css';
import 'hammerjs';
import RootRouterModule  from './modules/routing.module'
import './material/material.css'

import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic'


platformBrowserDynamic().bootstrapModule(RootRouterModule);

