import {
    Component,
    Input
} from "@angular/core"
import {
    ROUTER_DIRECTIVES,
    ActivatedRoute,
    Router
} from "@angular/router"

import {
    Dataset
} from "../model/dataset"
import {
    DatasetService
} from "../service/dataset.service"

@Component({
    selector: 'dataset',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/app/components/dataset/datasetView/datasetView.html',
    providers: [DatasetService]
})

export class DatasetViewComponent {

    private sub;
    public dataset;
    constructor(private route: ActivatedRoute, private router: Router, private datasetservice: DatasetService) {

    }

    goBack() {
        this.router.navigate(["/dataset"])
    }

    ngOnInit() {
        var that = this;
        this.sub = this.route.params.subscribe(s => {
            let id = s['id'];
            // var ttt = that;
            that.datasetservice.getById(id).then(dataset => {

                that.dataset = dataset;
            });
        })
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe()
        }
    }


}
DatasetViewComponent['parameters'] = [ActivatedRoute, Router, DatasetService]