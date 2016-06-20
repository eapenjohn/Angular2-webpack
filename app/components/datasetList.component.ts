import {Component,Input} from '@angular/core'
import {DatasetService} from '../services/dataset.service'
import {DatasetTile} from './datasetTile.Componenet'
import DatasetSearch from './datsetSearch.component'

import {DatasetFilterPipe} from '../pipes/datasetFilter.pipe'
import DatasetSearchPipe from '../pipes/datasetSearch.pipe'


@Component(
    {
        selector: 'dataset-list',
        pipes:[DatasetFilterPipe,DatasetSearchPipe],
        directives:[DatasetTile,DatasetSearch],
        template: `
         <dataset-serach (searchTerm)='searchString=$event'></dataset-serach>
          <dataset-selector></dataset-selector>
        <ul>
          <dataset-tile *ngFor='let dataset of datasetService.datasets | datasetFilter : selection  | datasetsearch : searchString'  [dataset]='dataset'
           (datasetUpdateTrigger)='datasetService.update($event)'
          ></dataset-tile> 
        </ul>
     `
    }
)
export class DatasetListComponenet {
     searchString;
    @Input() selection;
    
    constructor(public datasetService: DatasetService) {
        datasetService.get();
    }
}

DatasetListComponenet['parameters'] = [DatasetService]