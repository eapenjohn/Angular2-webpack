import {Component} from 'angular2/core'
import {DatasetService} from '../services/dataset.service'
import {DatasetTile} from './datasetTile.Componenet'
@Component(
    {
        selector: 'dataset-list',
        directives:[DatasetTile],
        template: `
        datastetttttttt lissiis
        <ul>
          <dataset-tile *ngFor='let dataset of datasets' [hidden]='dataset.hide==true' [dataset]='dataset'></dataset-tile> 
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