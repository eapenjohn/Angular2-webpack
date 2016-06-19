import {Component,Input} from '@angular/core'
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
        selectionselection=={{selection}}
          <dataset-tile *ngFor='let dataset of datasetService.datasets | datasetFilter : selection'  [dataset]='dataset'
           (datasetUpdateTrigger)='datasetService.update($event)'
          ></dataset-tile> 
        </ul>
     `
    }
)
export class DatasetListComponenet {
   
    @Input() selection;
    
    constructor(public datasetService: DatasetService) {
        datasetService.get();
    }
}

DatasetListComponenet['parameters'] = [DatasetService]