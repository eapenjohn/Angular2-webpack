/// <reference path="../typings/globals/jasmine/index.d.ts" />
import 'reflect-metadata';
import {
    bootstrap
} from '@angular/platform-browser-dynamic'
import {
    Component
} from '@angular/core'
import {
    HTTP_PROVIDERS
} from '@angular/http'

import {
    APP_ROUTER_PROVIDERS,
    DATASET_GUARDS
} from './components/dataset/routes'

import {
    ListsComponent
} from './components/dataset/list/list.component'

import {
    HOME_ROUTE_CONFIG
} from './components/home/routes'

import {
    RouterConfig,
    provideRouter,
    ROUTER_DIRECTIVES
} from '@angular/router'

import 'bootstarp-css'


@Component({
    selector: "app",
    directives: [ROUTER_DIRECTIVES, ListsComponent],
    template: ` 
    <router-outlet></router-outlet>
     <router-outlet name="details"></router-outlet>
    `
})


export class App {
    selection = false
    constructor() {}

    selectorChnage($event) {
        this.selection = $event;
    }
}

var routes = [...HOME_ROUTE_CONFIG, ...APP_ROUTER_PROVIDERS]
var guards = [...DATASET_GUARDS]
bootstrap(App, [provideRouter(routes), ...guards, HTTP_PROVIDERS]).catch(err => console.error(err));