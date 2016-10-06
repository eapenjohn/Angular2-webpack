import {
    MockBackend,
    MockConnection
} from '@angular/http/testing'

import {
    Response,
    ResponseOptions
} from '@angular/http'


import {
    Component
} from '@angular/core'



export class Dataset {
    connection;
    constructor(backend: MockBackend) {
        console.log('mockRespond');
        backend.connections.subscribe(c => {
            c.mockRespond(new Response(new ResponseOptions({
                body: "sadsadsa"
            })))
        });
        // this.connection.mockRespond(new Response(new ResponseOptions({
        //     body: 'sdsa'
        // })));
    }

}

Dataset['parameters'] = [MockBackend]