
import {RouterConfig,provideRouter,ROUTER_DIRECTIVES} from '@angular/router'
import {DatasetListComponenet}  from './components/datasetList.component'


const routes=[
    {
        path:'datsetexplore',
        name:'explore',
        componenet:DatasetListComponenet
    }
]

export const routeProvider=[provideRouter(routes)]