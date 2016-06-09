import {Injectable} from 'angular2/core'
import {Dataset} from '../models/dataset'
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
       var datasets :Array<Dataset>=[];
       for(var i=0; i< 5; i++)
       {
           var dataset=new Dataset();
           dataset.description='Des '+i;
           dataset.name='name '+i;
           dataset.supplierName='supplierName '+i;
           dataset.id='id '+i;
          datasets.push(dataset);
       }
       return datasets;
    }
}