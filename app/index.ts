
import 'reflect-metadata';
import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {APP_ROUTER_PROVIDERS} from './routes'
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
bootstrap(App, [APP_ROUTER_PROVIDERS]).catch(err => console.error(err));
