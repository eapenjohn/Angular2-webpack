import { Routes } from '@angular/router'

import { UsersListComponent, UserDetailsComponent } from './components'

let routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: ':id',
                        component: UserDetailsComponent
                    }
                ]
            }
        ]
    }
]

export default routes