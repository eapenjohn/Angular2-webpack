
import {RouterConfig, provideRouter, ROUTER_DIRECTIVES} from '@angular/router'
import {DatasetListComponenet}  from './components/datasetList.component'
import {CreateDataset} from './components/createDataset.componenet'


export const  routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'dataset-lists',
        pathMatch: 'full'
    },
    {
        path: 'dataset-lists',
        component: DatasetListComponenet,
        children: [
            {
                path: 'create',
                component: CreateDataset,
            },
            {
                path:'',
                 component: DatasetListComponenet
            }
        ]

    }
]

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)]