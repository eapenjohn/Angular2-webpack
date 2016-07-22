import {
    Injectable
} from '@angular/core'
import {
    Http
} from '@angular/http'
import {
    Observable
} from 'rxjs/Rx'

import {
    Dataset
} from '../model/dataset'

var datasets = [
    new Dataset("Geo data", "Geo data provided by Met", "Met office", 1),
    new Dataset("Glass factory", "City of  Denmark", "copen", 1)
]

let datasetPromise = Promise.resolve(datasets);

@Injectable()
export class DatasetService {
    datasets: Array < Dataset > = []


    constructor(private http: Http) {

    }

    get() {

        // this.http.get("http://sdasdasdas.com").map(r => r.json()).subscribe(data => {});
        return datasetPromise;

    }

    getById(id: string) {
        return datasetPromise.then(response => {
            return response.find(dataset => dataset.id == id);
        })

    }

    save(dataset: Dataset) {

        datasetPromise.then((response) => {
            var datasetRef = response.find(d => d.id == dataset.id);
            datasetRef.name = dataset.name;
            datasetRef.supplierName = dataset.supplierName;
            datasetRef.description = dataset.description;
        })
    }
}

DatasetService['parameters'] = [Http]