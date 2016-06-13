///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'
import {DatasetTile}  from './components/datasetTile.Componenet'
import {DatasetListComponenet}  from './components/datasetList.component'
import {CreateDataset}  from './components/createDataset.componenet'
import {DatasetService} from './services/dataset.service'

@Component({
    selector: "app",
    directives: [DatasetTile,DatasetListComponenet,CreateDataset],
    template: `hiiiiiiiiiifdsafdhas <dataset-list></dataset-list>
    
    New Dataset
   <create-dataset></create-dataset>
 
    `
})
class App {

    constructor() {
        console.log('hi i am from datasettile')
    }
}
bootstrap(App, [DatasetService]);

