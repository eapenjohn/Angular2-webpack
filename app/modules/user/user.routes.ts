import { Routes } from '@angular/router'

import { UsersListComponent, UserDetailsComponent, RootUserComponent, UserRacesComponent } from './components'

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
                        component: UserDetailsComponent,
                        children: [
                            { path: 'racedetails', component: UserRacesComponent, outlet: 'races' }
                        ]
                    }
                ]
            },
            {
                path: '', outlet: 'list', component: UsersListComponent
            },

        ]
    }
]

export default routes