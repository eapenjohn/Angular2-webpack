import {
    RouterConfig,
    provideRouter
} from '@angular/router'

import {
    HomeComponent
} from './home.component'

import {
    AdvertiseComponent
}
from './advertise/advertise.component'

const routes: RouterConfig = [{
    path: '',
    component: HomeComponent
}, {
    path: 'home',
    children: [{
        path: '',
        component: HomeComponent
    }]
}, {
    path: 'details-items',
    component: AdvertiseComponent,
    outlet: 'details'
}]

export const HOME_ROUTE_CONFIG = routes;