
import {RouterConfig, provideRouter, ROUTER_DIRECTIVES} from '@angular/router'
import {DatasetListComponenet}  from './components/datasetList.component'
import {CreateDataset} from './components/createDataset.componenet'

import {HomeComponent}  from './components/dataset/home.component'
import {DatasetViewComponent}  from './components/dataset/datasetView/datasetView.component'
import {ListsComponent}  from './components/dataset/list/list.component'


export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: ':id',
                component: DatasetViewComponent
            },
            {
                path: '',
                component: ListsComponent
            }
        ]
    },
]

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)]