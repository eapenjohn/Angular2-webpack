import {
    Routes,
    RouterModule
} from '@angular/router'

import {
    LoginComponent
} from './components'

const routes: Routes = [{
    path: 'login',
    children: [{
        path: '',
        component: LoginComponent
    }]
}]

export const routing = RouterModule.forRoot(routes);