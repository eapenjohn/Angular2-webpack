
import 'reflect-metadata';
import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {DatasetTile}  from './components/datasetTile.Componenet'
import {DatasetListComponenet}  from './components/datasetList.component'
import {CreateDataset}  from './components/createDataset.componenet'
import {DatasetService} from './services/dataset.service'
import {DatasetSelectorComponent} from './components/datasetSelector.component'

import {APP_ROUTER_PROVIDERS} from './routes'
import {RouterConfig,provideRouter,ROUTER_DIRECTIVES} from '@angular/router'
@Component({
    selector: "app",
    directives: [ROUTER_DIRECTIVES],
    template: `   <a [routerLink]="['/dataset-lists']">dataset-lists</a>
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
bootstrap(App, [APP_ROUTER_PROVIDERS,DatasetService]).catch(err => console.error(err));
