import {Injectable} from 'angular2/core'

 @Injectable()
export  class DatasetService
{
    constructor()
    {
        var ss='';
        console.log('reached DatasetService constructor')
    }
    
    get()
    {
        console.log('DatasetService get being called')
    }
}