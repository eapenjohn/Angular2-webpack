/// <reference path="../typings/globals/jasmine/index.d.ts" />
import 'reflect-metadata';
import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'

import {APP_ROUTER_PROVIDERS} from './components/dataset/routes'
import {RouterConfig,provideRouter,ROUTER_DIRECTIVES} from '@angular/router'

import 'bootstarp-css'


@Component({
    selector: "app",
    directives: [ROUTER_DIRECTIVES],
    template: ` 
    <router-outlet></router-outlet>
    `
})


export class App {
    selection=false
    constructor() {       
    }

     selectorChnage($event)
     {
     this.selection=$event;
     }
}

var routes=[...APP_ROUTER_PROVIDERS]
bootstrap(App, [routes,HTTP_PROVIDERS]).catch(err => console.error(err));
