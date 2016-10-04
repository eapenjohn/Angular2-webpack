 import {
     RequestOptions,
     ConnectionBackend,
     RequestOptionsArgs,
     Http
 } from '@angular/http'


 export class HttpInterceptor extends Http {
     constructor(backend: ConnectionBackend, requestOptions: RequestOptions) {
         super(backend, requestOptions);
     }

     get(url: string, options: RequestOptionsArgs) {
         console.log("ASdasdasd" + url);
         return super.get(url, options);
     }
 }

 HttpInterceptor['parameters'] = [ConnectionBackend, RequestOptions]