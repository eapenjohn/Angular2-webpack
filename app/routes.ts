
import {RouterConfig, provideRouter, ROUTER_DIRECTIVES} from '@angular/router'
import {DatasetListComponenet}  from './components/datasetList.component'
import {CreateDataset} from './components/createDataset.componenet'

import {HomeComponent}  from './components/dataset/home.component'


export const  routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
           
            
        ]

    }
]

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)]