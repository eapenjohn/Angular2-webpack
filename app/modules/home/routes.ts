import {
    Routes,
    RouterModule
} from '@angular/router'

import {
    HomeComponent
} from './home.component'

import components
    from './components'

import UserDetails from '../user/components'


const routes: Routes = [{
    path: '',
    component: components.RootComponent
}, {
    path: 'users',
    children: [{
        path: '',
        children: [
            {
                path: ':id',
                component: UserDetails
            }
        ]
    }]
}, {
    path: 'details-items',
    component: components.AdvertiseComponent,
    outlet: 'details'
}]

export const HOME_ROUTE_CONFIG = routes;

export const routing = RouterModule.forRoot(routes)