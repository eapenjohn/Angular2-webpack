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


import {
    RootComponent
}
from './root/root.component'


const routes: Routes = [{
    path: '',
    component: RootComponent
}, {
    path: 'home',
    children: [{
        path: '',
        component: RootComponent,
    }]
}, {
    path: 'details-items',
    component: AdvertiseComponent,
    outlet: 'details'
}]

export const HOME_ROUTE_CONFIG = routes;

export const routing = RouterModule.forRoot(routes)