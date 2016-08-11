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

import {
  NewDatasetComponent
} from '../new/new.component'

@Component({
  selector: 'dataset-lists',
  template: require('./list.html'),
  providers: [DatasetService],
  pipes: [SearchPipe],
  directives: [ROUTER_DIRECTIVES, NewDatasetComponent]
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
      relativeTo: this.route,
      queryParams: {
        description: dataset.name
      }
    });
  }

  navigateToNewDataset() {
    this.router.navigate(['add/new'], {
      relativeTo: this.route
    })

  }

  displayDeatils() {
    this.router.navigateByUrl('/dataset(details:details-items;id:1)')
  }
}

ListsComponent['parameters'] = [DatasetService, Router, ActivatedRoute]