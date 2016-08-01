import {
    RouterConfig,
    provideRouter
} from '@angular/router'

import {
    HomeComponent
} from './home.component'

import {
    ListsComponent
}
from '../dataset/list/list.component'

const routes: RouterConfig = [{
    path: '',
    component: HomeComponent
}, {
    path: 'home',
    children: [{
        path: '',
        component: HomeComponent
    }]
}]

export const HOME_ROUTE_CONFIG = routes;