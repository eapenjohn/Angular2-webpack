import { Routes } from '@angular/router'

import  * as user from '../user/components'
import  {RootComponent, HomeComponent , AdvertiseComponent} from '../home/components'

let routes: Routes = [{
    path: '',
    component: RootComponent
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
    component: AdvertiseComponent,
    outlet: 'details'
}]


export default routes