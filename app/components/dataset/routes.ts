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
} from './guard'

import {
    EditDeactivateGuard
} from './guard'

export const routes: RouterConfig = [{
    path: 'legacy',
    redirectTo: '/dataset',
    pathMatch: 'full'
}, {
    path: 'dataset',
    children: [{
        path: '',
        component: ListsComponent
    }, {
        path: ':id',
        component: DatasetViewComponent
    }, {
        path: 'edit/:id',
        component: DatasetEditComponent,
        canActivate: [TestGuard],
        canDeactivate: [EditDeactivateGuard]
    }]
}]

export const APP_ROUTER_PROVIDERS = routes;

export const DATASET_GUARDS = [TestGuard, EditDeactivateGuard]