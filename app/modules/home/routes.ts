import {
    Routes,
    RouterModule
} from '@angular/router'

import components
    from './components'

import  * as user from '../user/components'


const routes: Routes = [{
    path: '',
    component: components.RootComponent
}, {
    path: 'users',
    children: [{
        path: '',
        component: user.UsersListComponent,
        children: [
            {
                path: ':id',
                component: user.UserDetails
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