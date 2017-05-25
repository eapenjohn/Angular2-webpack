import { Routes } from '@angular/router'

import { UsersListComponent, UserDetailsComponent, RootUserComponent, UserRacesComponent, EditComponent } from './components'

import { LoginGuard } from '../login/guards'
import { EditFormDeactive } from './guards'
import { UserService, UserResolver } from './services'

let routes: Routes = [
    {
        path: 'users',
        component: RootUserComponent,
        children: [
            {
                path: '',
              
                children: [
                    {
                        path: 'new', component: EditComponent, canDeactivate: [EditFormDeactive],  resolve: { user: UserResolver },
                    },
                    {
                        path: ':id',
                        resolve: { user: UserResolver },
                        children: [

                            {
                                path: '', component: UserDetailsComponent, children: []
                            },
                            //not working
                            { path: 'racedetails', component: UserRacesComponent, outlet: 'races' },
                            // { path: 'edit', component: EditComponent, canActivate: [LoginGuard] }
                            { path: 'edit', component: EditComponent, canActivate: [], canDeactivate :[EditFormDeactive] },
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

