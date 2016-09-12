import {
    Routes,
    RouterModule
} from '@angular/router'

import {
    HomeComponent
} from './home.component'

import {
    AdvertiseComponent
}
from './advertise/advertise.component'

const routes: Routes = [{
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

export const routing = RouterModule.forRoot(routes)