import {Component} from 'angular2/core'
import {DatasetService} from '../services/dataset.service'
import {Dataset} from '../models/dataset'

@Component({
    selector: 'create-dataset',
    template: `
<input type='text' [(ngModel)]='name'/>
<input type="button"  value="Add Dataset" (click)='add()'/>`
})

export class CreateDataset {
    name: string;
    constructor(private datasetService: DatasetService) {

    }
    add() {
        var dataset = new Dataset();
        dataset.description = 'Des ' + this.name;
        dataset.name = 'name ' + this.name;
        dataset.supplierName = 'supplierName ' + this.name;
        dataset.id = 'id ' + this.name;
        this.datasetService.add(dataset);
    }
}

CreateDataset.parameters = [DatasetService]