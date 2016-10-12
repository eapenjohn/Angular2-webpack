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
    new Dataset("Glass factory", "City of  Denmark", "copen", 2)
]

let datasetPromise = Promise.resolve(datasets);

@Injectable()
export class DatasetService {
    datasets: Array < Dataset > = []


    constructor(private http: Http) {

    }

    testHttp() {

    }

    get() {
        return this.http.get("http://llll.com").map((r) => r.json());
    }

    getById(id: string | number) {
        // return datasetPromise.then(response => {
        //     return response.find(dataset => dataset.id == id);
        // })
        return this.http.get("http://llll.com").flatMap((r) => {
            var datasets = r.json();
            return datasets;
        }).filter((dataset) => {
            return dataset.id == id;
        })
    }

    save(dataset: Dataset) {
        this.testHttp();
        var datasetRef = datasets.find(s => s.id == dataset.id)
        datasetRef.name = dataset.name;
        datasetRef.supplierName = dataset.supplierName;
        datasetRef.description = dataset.description;
    }

    add(dataset: Dataset) {

        datasets.push(dataset);
    }
}

DatasetService['parameters'] = [Http]