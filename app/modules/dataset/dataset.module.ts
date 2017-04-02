import {
    NgModule
} from '@angular/core'

import {
    HttpModule
} from '@angular/http'


import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from '@angular/material'

import {
    RouterModule
} from '@angular/router'

import {
    BrowserModule
} from '@angular/platform-browser'

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms'


import {
    routing
} from './routes'
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

import {
    NewDatasetComponent
} from './new/new.component'

import {
    DatasetService
} from './service/dataset.service'

import {
    SearchPipe
} from './list/pipe/search.pipe'

import {
    DatasetHomeComponent
} from './home.component'


@NgModule({
    // array of modules needed for this modules
    imports: [BrowserModule, routing, RouterModule, FormsModule, HttpModule, ReactiveFormsModule, FlexLayoutModule, MaterialModule],
    //components and directives part of this module
    declarations: [DatasetHomeComponent, ListsComponent, DatasetViewComponent, DatasetEditComponent, NewDatasetComponent, SearchPipe],
    //root component of the app
    bootstrap: [DatasetHomeComponent],
    //services used across the module and guards
    providers: [DatasetService, EditDeactivateGuard, TestGuard]
})

export class DatasetModule {

}