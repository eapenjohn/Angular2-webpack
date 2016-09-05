import {
  provide
} from '@angular/core'

import {
  beforeEach,
  describe,
  expect,
  it,
  inject,
  setBaseTestProviders,
  beforeEachProviders
} from '@angular/core/testing'

import 'rxjs/Rx';


import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  HTTP_PROVIDERS
} from '@angular/http'

import {
  MockBackend,
  MockConnection,
} from '@angular/http/testing'

import {
  Dataset
} from '../model/dataset'


import {
  DatasetService
} from './dataset.service'

describe("dataset.service tests", () => {

  beforeEachProviders(() => [DatasetService, MockBackend, HTTP_PROVIDERS, BaseRequestOptions,
    provide(Http, {
      useFactory:
        (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions)
        },
      deps: [MockBackend, BaseRequestOptions]
    }),
    provide(Dataset, {
      useValue: new Dataset("john", "Geo data provided by Met", "Met office", 3)
    })
  ])

  // beforeEach(inject([MockBackend], (backend: MockBackend) => {
  //   backend.connections.subscribe((c: MockConnection) => {
  //     var datasets = [
  //       new Dataset("Geo data", "Geo data provided by Met", "Met office", 1),
  //       new Dataset("Glass factory", "City of  Denmark", "copen", 2)
  //     ];

  //     var res = new Response(new ResponseOptions({
  //       body: datasets
  //     }))
  //     c.mockRespond(res);
  //   })
  // }))

  it('object created successfully again', inject([DatasetService], (datasetService: DatasetService) => {
    expect(datasetService).not.toBeNull();
  }))

  it("test httpService", inject([MockBackend, DatasetService], (backend: MockBackend, datasetService: DatasetService) => {
    let response = 'Expected Response from HTTP service usually JSON format';
    let responseOptions = new ResponseOptions({
      body: {
        kk: response
      }
    });
    backend.connections.subscribe(
      c => c.mockRespond(new Response(responseOptions)));
    var k = datasetService.testHttp();
  }))

  it("Get method returns promise", inject([DatasetService], (datasetService: DatasetService) => {
    var promise = datasetService.get();
    promise.then(response => {
      expect(response.length).toBe(2);
    })
  }));

  it("getById returns the item", inject([DatasetService], (datasetService: DatasetService) => {
    var promise = datasetService.getById(2);
    promise.then(response => {
      expect(response.id).toBe(2);
    })
  }))

  it("Save Method update the item content", inject([DatasetService], (datasetService: DatasetService) => {
    var dataset = new Dataset("john", "Geo data provided by Met", "Met office", 2);
    datasetService.save(dataset);
    var promise = datasetService.getById(2);
    promise.then(response => {
      expect(response.name).toBe('john');
    })
  }))

  it("Add increment the count by 1", inject([DatasetService, Dataset], (datasetService: DatasetService, dataset: Dataset) => {
    // var dataset = new Dataset("john", "Geo data provided by Met", "Met office", 3);
    datasetService.add(dataset);
    var promise = datasetService.get();
    promise.then(response => {
      expect(response.length).toBe(3);
    })
  }))

})