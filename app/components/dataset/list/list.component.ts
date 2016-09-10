import {
  Component,
  Input
} from '@angular/core'

import {
  DatasetService
} from '../service/dataset.service'

import {
  // ROUTER_DIRECTIVES,
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  // selector: 'dataset-lists',
  template: require('./list.html')
})

export class ListsComponent {
  searchValue = ''
    // @Input() searchValue;
  datasets;

  constructor(datasetservice: DatasetService, private router: Router, private route: ActivatedRoute) {
    datasetservice.get().then((response) => {
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