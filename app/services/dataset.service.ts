import {Injectable} from 'angular2/core'
import {Dataset} from '../models/dataset'
 @Injectable()
export  class DatasetService
{
    datasets :Array<Dataset>=[];
    constructor()
    {
        var ss='';
        console.log('reached DatasetService constructor')
    }
    
    get()
    {
      
       for(var i=0; i< 2; i++)
       {
           var dataset=new Dataset();
           dataset.description='Des '+i;
           dataset.name='name '+i;
           dataset.supplierName='supplierName '+i;
           dataset.id='id '+i;
          this.datasets.push(dataset);
       }
       return this.datasets;
    }

    add(dataset:Dataset)
    {
        this.datasets=[...this.datasets,dataset]
       // this.datasets.push(dataset);
       
    }


}