import {Component} from 'angular2/core'
import {DatasetService} from '../services/dataset.service'

@Component({
    selector:'dataset-tile',
    template:`<div>Dataset1</div> 
    <input type='text' #comment>  
     <input (click)='addToBasket(comment)' value='add to basket' type='button'/>`
})

export class DatasetTile
{
    constructor(datasetServive:DatasetService)
    {
        datasetServive.get();
        console.log('hi i am from datasettile')
    }
    
    addToBasket(comment)
    {
        console.log('add to basket clicked' , comment.value);
    }
    
    
}

DatasetTile.parameters=[DatasetService];
