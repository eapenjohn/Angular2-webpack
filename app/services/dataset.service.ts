import {Injectable} from 'angular2/core'
import {Dataset} from '../models/dataset'
@Injectable()
export class DatasetService {
    datasets: Array<Dataset> = [];
    constructor() {
        var ss = '';
        console.log('reached DatasetService constructor')
    }

    get() {

        for (var i = 0; i < 5; i++) {
            var dataset = new Dataset();
            dataset.description = 'Des ' + i;
            dataset.name = 'name ' + i;
            dataset.supplierName = 'supplierName ' + i;
            dataset.id = 'id ' + i;
            dataset.hide=false;
            this.datasets.push(dataset);
        }
        return this.datasets;
    }

    add(dataset: Dataset) {
    // this.datasets=[...this.datasets,dataset]
        this.datasets.push(dataset);
        var temp = this.datasets;
        this.datasets = [];
        this.datasets = temp;

    }

    update(dataset:Dataset)
    {
     var index=this.datasets.indexOf(dataset);
     this.datasets=[...this.datasets.slice(0,index),dataset,...this.datasets.slice(index+1)];
    }


}