import {
  Component,
  Input
} from '@angular/core'

import {
  DatasetService
} from '../service/dataset.service'
import {
  SearchPipe
} from './pipe/search.pipe'
import {
  ROUTER_DIRECTIVES,
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'dataset-lists',
  templateUrl: '/app/components/dataset/list/list.html',
  providers: [DatasetService],
  pipes: [SearchPipe],
  directives: [ROUTER_DIRECTIVES]
})

export class ListsComponent {
  searchValue = ''
    // @Input() searchValue;
  datasets;

  constructor(datasetservice: DatasetService, private router: Router, private route: ActivatedRoute) {
    this.datasets = datasetservice.get().then((response) => {
      this.datasets = response;
    });
  }

  navigateToView(dataset) {
    // this.router.navigateByUrl('/dataset/' + dataset.id)

    //  this.router.navigate(['dataset', dataset.id]);

    this.router.navigate([dataset.id], {
      relativeTo: this.route
    });
  }
}

ListsComponent['parameters'] = [DatasetService, Router, ActivatedRoute]