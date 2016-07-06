import {Component, Input} from "@angular/core"
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router"

import {DatasetService} from "../service/dataset.service"

@Component({
    selector: 'dataset',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/app/components/dataset/datasetView/datasetView.html',
    providers: [DatasetService]
})

export class DatasetViewComponent {
    dataset:any;
    constructor(private route: ActivatedRoute, private router: Router,private datasetservice:DatasetService) {

    }

    goBack($event) {
        this.router.navigate(["/home"])
    }

    ngOnInit() {
        var that=this;
        this.route.params.subscribe(s => {
            let id = s['id'];
            this.dataset=that.datasetservice.getById(id);
        })
    }


}
DatasetViewComponent['parameters'] = [ActivatedRoute, Router,DatasetService]

