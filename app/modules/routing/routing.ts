import { Routes } from '@angular/router'

import  {UsersListComponent, UserDetails} from '../user/components'
import  {RootComponent, HomeComponent , AdvertiseComponent, PageNotFoundComponent} from '../home/components'


let routes: Routes = [{
    path: '',
  //  component: RootComponent,
  pathMatch:'full',
    redirectTo:'/users'
}, {
    path: 'users',
    loadChildren :'../user/user.module#UserModule'
    // children: [{
    //     path: '',
    //     component: UsersListComponent,
    //     children: [
    //         {
    //             path: ':id',
    //             component: UserDetails
    //         }
    //     ]
    // }]
}, {
    path: 'details-items',
    component: AdvertiseComponent,
    outlet: 'details'
},{
    path:'**',
    component:PageNotFoundComponent
}]


export default routes