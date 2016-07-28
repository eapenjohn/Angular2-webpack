import {
    RouterConfig,
    provideRouter,
    ROUTER_DIRECTIVES
} from '@angular/router'

import {
    HomeComponent
} from './home.component'
import {
    DatasetViewComponent
} from './datasetView/datasetView.component'
import {
    ListsComponent
} from './list/list.component'
import {
    DatasetEditComponent
} from './edit/edit.component'

import {
    TestGuard
} from './guard/test.guard'

export const routes: RouterConfig = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent,
    children: [{
        path: ':id',
        component: DatasetViewComponent
    }, {
        path: '',
        component: ListsComponent
    }, {
        path: 'edit/:id',
        canActivate: [TestGuard],
        component: DatasetEditComponent
    }]
}, ]

export const APP_ROUTER_PROVIDERS = [provideRouter(routes), TestGuard]