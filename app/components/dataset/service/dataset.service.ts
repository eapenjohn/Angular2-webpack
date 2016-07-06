import {Injectable} from '@angular/core'

import {Dataset} from '../model/dataset'


@Injectable()
export class DatasetService {
    datasets: Array<Dataset> = []
    get() {

        var dataset1 = new Dataset();
        dataset1.id = '1'
        dataset1.description = 'Geo data'
        dataset1.name = 'Geo data'
        dataset1.supplierName = 'Met Office'

        var dataset2 = new Dataset();
        dataset2.id = '2'
        dataset2.description = 'Weather Data  '
        dataset2.name = 'Wreather data'
        dataset2.supplierName = 'Met Office'

        this.datasets.push(dataset1)
        this.datasets.push(dataset2)
        return this.datasets;
    }

    getById(id: string) {
        var items = this.get().filter(s => s.id == id)
        return items[0];
    }
}