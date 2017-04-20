import { Routes } from '@angular/router'

import { UsersListComponent, UserDetails } from '../user/components'
import { RootComponent, HomeComponent, AdvertiseComponent, PageNotFoundComponent } from '../home/components'


let routes: Routes = [{
    path: '',
    component: RootComponent,
    //   pathMatch:'full',
    //     redirectTo:'/users'
    children: [
        {
            path: 'hello',
            component: 'angular'
        }
    ]
},
{
    path: 'users',
    loadChildren: '../user/user.module#UserModule'
}, 
{
    path: '**',
    component: PageNotFoundComponent
}]


export default routes