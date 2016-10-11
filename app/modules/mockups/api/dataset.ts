import {
    MockBackend,
    MockConnection
} from '@angular/http/testing'

import {
    Response,
    ResponseOptions
} from '@angular/http'


import {
    Component,
    Injectable
} from '@angular/core'


// @Component({
//     selector: "datasetname",
//     template: "sdsad"
// })

var dataset = require('./dataset.json')

@Injectable()
export class Dataset extends MockBackend {
    constructor() {
        super();
        // console.log('mockRespond');
        this.connections.subscribe(c => {
            c.mockRespond(new Response(new ResponseOptions({
                body: dataset
            })))
        });
        // this.connection.mockRespond(new Response(new ResponseOptions({
        //     body: 'sdsa'
        // })));
    }

}

//Dataset['parameters'] = [MockBackend]