import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'

import {DatasetService} from '../service/dataset.service'

@Component({
    selector: 'dataset-edit',
    templateUrl: '/app/components/dataset/edit/edit.html',
    providers: [DatasetService],
    directives: [ROUTER_DIRECTIVES]
})

export class DatasetEditComponent {
    dataset;
    datasetRef;
    constructor(private routes: ActivatedRoute, private datasetService: DatasetService, private router: Router) {

    }
    save() {
        
        this.datasetService.save(this.dataset);

        this.router.navigate(['/home/', this.dataset.id]);
    }

    canDeactivate() {
        alert('ss')
    }

    ngOnInit() {
     
        var that = this;
        this.routes.params.subscribe(s => {
            let id = s["id"];
            this.dataset = that.datasetService.getById(id).then((response) => {
                that.dataset=Object.assign({},response);
                that.datasetRef = response;
            });
        })

    }
}

DatasetEditComponent['parameters'] = [ActivatedRoute, DatasetService, Router]