import {Component,Input} from '@angular/core'

import {DatasetService} from '../service/dataset.service'
import {SearchPipe} from './pipe/search.pipe'

@Component({
    selector:'dataset-lists',
    templateUrl:'/app/components/dataset/list/list.html',
    providers:[DatasetService],
    pipes:[SearchPipe]
})

export class ListsComponent
{
    @Input() searchValue;
    datasets;
 
 constructor(datasetservice:DatasetService)
 {
   this.datasets=datasetservice.get();
 }
}

ListsComponent['parameters']=[DatasetService]