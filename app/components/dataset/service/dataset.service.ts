import {Injectable} from '@angular/core'

import {Dataset} from '../model/dataset'

var datasets=[
    new Dataset("Geo data","Geo data provided by Met", "Met office",1),
     new Dataset("Glass factory","City of  Denmark", "copen",1)
]

let datasetPromise=Promise.resolve(datasets);

@Injectable()
export class DatasetService {
    datasets: Array<Dataset> = []
    get() {
    
    return datasetPromise;
       
    }

    getById(id: string) {
        return datasetPromise.then(response=>
        {
         return response.find(dataset=> dataset.id == id);
        })
       
    }

    save(dataset: Dataset)
    {
        var item=this.datasets.filter(s=>s.id==dataset.id)[0];
        item.description=dataset.description;
        item.name=dataset.name;
        item.supplierName=dataset.supplierName;

        //this.datasets=[...this.datasets]
       // item.description=dataset.description;
    }
}