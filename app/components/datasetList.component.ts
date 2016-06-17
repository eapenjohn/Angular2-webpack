import {Component} from 'angular2/core'
import {DatasetService} from '../services/dataset.service'
import {DatasetTile} from './datasetTile.Componenet'
import {DatasetFilterPipe} from '../pipes/datasetFilter.pipe'

@Component(
    {
        selector: 'dataset-list',
        pipes:[DatasetFilterPipe],
        directives:[DatasetTile],
        template: `
        <ul>
          <dataset-tile *ngFor='let dataset of datasets | datasetFilter' [hidden]='dataset.hide==true' [dataset]='dataset'
           (datasetUpdateTrigger)='datasetService.update($event)'
          ></dataset-tile> 
        </ul>
     `
    }
)
export class DatasetListComponenet {
    datasets;
    constructor(public datasetService: DatasetService) {
        this.datasets = datasetService.get();
    }
}

DatasetListComponenet['parameters'] = [DatasetService]