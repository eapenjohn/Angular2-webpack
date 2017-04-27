import { Routes} from '@angular/router'

import { UsersListComponent, UserDetailsComponent,RootUserComponent, UserRacesComponent } from './components'

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
            },
            {path:'racedetails', component:UserRacesComponent, outlet:'races'}
        ]
    }
]

export default routes