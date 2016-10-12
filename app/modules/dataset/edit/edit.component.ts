import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core'
import {
    Router,
    ActivatedRoute,
    // ROUTER_DIRECTIVES
} from '@angular/router'

import {
    DatasetService
} from '../service/dataset.service'

@Component({
    // selector: 'dataset-edit',
    template: require('./edit.html')
})

export class DatasetEditComponent {
    dataset;
    datasetRef;
    dirty = false;
    constructor(private routes: ActivatedRoute, private datasetService: DatasetService, private router: Router) {

    }
    save() {

        this.datasetService.save(this.dataset);

        this.dirty = false;
        this.router.navigate(['/dataset/', this.dataset.id]);
    }


    canDeactivate() {
        alert('ss')
    }

    ngOnInit() {

        var that = this;
        this.routes.params.subscribe(s => {
            let id = s["id"];
            that.datasetService.getById(id).subscribe((response) => {
                that.dataset = Object.assign({}, response);
                that.datasetRef = response;
            });
        })

    }
}

DatasetEditComponent['parameters'] = [ActivatedRoute, DatasetService, Router]