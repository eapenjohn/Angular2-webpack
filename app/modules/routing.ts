import { Routes } from '@angular/router'

import { RootComponent, HomeComponent, AdvertiseComponent, PageNotFoundComponent } from './home/components'


let routes: Routes = [{
    path: '',
    component: RootComponent,
    //   pathMatch:'full',
    //     redirectTo:'/users'
},
{
    path: 'users',
    loadChildren: './user/user.module#UserModule'
}, 
{
    path: '**',
    component: PageNotFoundComponent
}]


export default routes