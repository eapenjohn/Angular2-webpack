import {Component} from 'angular2/core'
import {DatasetService} from '../services/dataset.service'

@Component(
    {
        selector: 'dataset-list',
        template: `datastetttttttt lissiis
        <ul>
        <li *ngFor='#dataset of datasets'>
        {{dataset.name}}
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