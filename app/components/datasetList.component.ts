import {Component} from 'angular2/core'
import {DatasetService} from '../services/dataset.service'

@Component(
    {
        selector: 'dataset-list',
        template: `datastetttttttt lissiis
        <ul>
        <li *ngFor='#dataset of datasets' [hidden]='dataset.hide==true'>
         Name {{dataset.name}}
        Description {{dataset.hide}}
        Hide the element {{dataset.hide}}
        </li>
        </ul>
     `
    }
)
export class DatasetListComponenet {
    datasets;
    constructor(datasetService: DatasetService) {
        this.datasets = datasetService.get();
    }
}

DatasetListComponenet.parameters = [DatasetService]