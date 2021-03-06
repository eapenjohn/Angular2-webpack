import {
    Component,
    Input
} from "@angular/core"
import {
    // ROUTER_DIRECTIVES,
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
    // selector: 'dataset',
    template: require('./datasetView.html')
})

export class DatasetViewComponent {
    public decription;
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

        // this.router.routerState.queryParams.subscribe(params => {
        //     this.decription = params["description"];
        // })
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe()
        }
    }


}
DatasetViewComponent['parameters'] = [ActivatedRoute, Router, DatasetService]