///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {DatasetTile}  from './components/datasetTile.Componenet'
import {DatasetListComponenet}  from './components/datasetList.component'
import {CreateDataset}  from './components/createDataset.componenet'
import {DatasetService} from './services/dataset.service'
import {DatasetSelectorComponent} from './components/datasetSelector.component'
@Component({
    selector: "app",
    directives: [DatasetTile,DatasetListComponenet,CreateDataset,DatasetSelectorComponent],
    template: `
      <h1 class='label'>New Dataset</h1>
      <create-dataset></create-dataset>
      <br/>
    Hide/Show Datasets based on hide property
      <dataset-selector (selector)='selectorChnage($event)'></dataset-selector>
      <br/>
      <dataset-list [selection]='selection'></dataset-list>`
})
class App {
    selection=false
    constructor() {
        console.log('hi i am from datasettile')
    }

     selectorChnage($event)
     {
     this.selection=$event;
     }
}
bootstrap(App, [DatasetService]);

