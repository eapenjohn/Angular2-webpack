import {Component} from 'angular2/core'
import {DatasetService} from '../services/dataset.service'

@Component({
    selector:'dataset-tile',
    template:`<div>Dataset1</div> 
    <input type='text' #comment>  
     <input (click)='addToBasket(comment)' value='add to basket' type='button'/>
     <input type='button' (mouseover)=mouseover($event,comment) value='mouseOver'/>
     `
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
    
    mouseover($event,comment)
    {
        console.log($event);
        console.log('comments from mouseover control', comment.value)
    }
}

DatasetTile.parameters=[DatasetService];
