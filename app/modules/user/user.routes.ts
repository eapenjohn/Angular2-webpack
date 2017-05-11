import { Routes } from '@angular/router'

import { UsersListComponent, UserDetailsComponent, RootUserComponent, UserRacesComponent, EditComponent } from './components'

import {LoginGuard} from '../login/guards'

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
                        children: [

                            {
                                path: '', component: UserDetailsComponent, children: [
                                   
                                ]
                            },
 //not working
                                    { path: 'racedetails', component: UserRacesComponent, outlet: 'races' },
                            // { path: 'edit', component: EditComponent, canActivate: [LoginGuard] }
                              { path: 'edit', component: EditComponent, canActivate: [] }
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

