import { Routes } from '@angular/router'

import { UsersListComponent, UserDetailsComponent, RootUserComponent, UserRacesComponent, EditComponent } from './components'

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
                            { path: 'edit', component: EditComponent }
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

