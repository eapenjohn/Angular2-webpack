import { Routes} from '@angular/router'

import { UsersListComponent, UserDetailsComponent,RootUserComponent } from './components'

let routes: Routes = [
    {
        path: 'users',
       component: RootUserComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: ':id',
                        component: UserDetailsComponent
                    }
                ]
            },
            {
                path:'', outlet:'list', component:UsersListComponent
            }
        ]
    }
]

export default routes