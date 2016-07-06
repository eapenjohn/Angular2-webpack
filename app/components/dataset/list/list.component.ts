import {Component,Input} from '@angular/core'

import {DatasetService} from '../service/dataset.service'
import {SearchPipe} from './pipe/search.pipe'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'dataset-lists',
    templateUrl:'/app/components/dataset/list/list.html',
    providers:[DatasetService],
    pipes:[SearchPipe],
    directives :[ROUTER_DIRECTIVES]
})

export class ListsComponent
{
     searchValue=''
   // @Input() searchValue;
    datasets;
 
 constructor(datasetservice:DatasetService)
 {
   this.datasets=datasetservice.get();
 }
}

ListsComponent['parameters']=[DatasetService]