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

import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http'

import {
  MockBackend,
  MockConnection,
} from '@angular/http/testing'

import {
  DatasetService
} from './dataset.service'

describe("dataset.service tests", () => {

  beforeEachProviders(() => [DatasetService, MockBackend,
    provide(BaseRequestOptions, {
      useFactory: () => {}
    }),
    provide(Http, {
      useFactory:
        (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions)
        },
      deps: [MockBackend, BaseRequestOptions]
    })
  ])

  beforeEach(inject([MockBackend], (backend: MockBackend) => {
    backend.connections.subscribe((c: MockConnection) => {
      var res = new Response(new ResponseOptions({
        body: ""
      }))
      c.mockRespond(res);
    })
  }))



  it('object created successfully again', inject([DatasetService], (datasetService: DatasetService) => {
    expect(datasetService).not.toBeNull();
  }))

  it("Get method returns promise", inject([DatasetService], (datasetService: DatasetService) => {
    var promise = datasetService.get();
    promise.then(response => {
      expect(response.length).toBe(2);
    })
  }));
})