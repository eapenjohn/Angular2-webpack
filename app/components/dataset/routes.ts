
import {RouterConfig, provideRouter, ROUTER_DIRECTIVES} from '@angular/router'

import {HomeComponent}  from './home.component'
import {DatasetViewComponent}  from './datasetView/datasetView.component'
import {ListsComponent}  from './list/list.component'


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