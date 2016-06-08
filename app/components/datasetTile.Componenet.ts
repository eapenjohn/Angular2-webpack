import {Component} from 'angular2/core'

@Component({
    selector:'dataset-tile',
    template:"<div>Dataset1</div> <input type='text' #comment>  <input (click)='addToBasket(comment)' value='add to basket' type='button'/>"
})

export class DatasetTile
{
    constructor()
    {
        console.log('hi i am from datasettile')
    }
    
    addToBasket(comment)
    {
        console.log('add to basket clciked' , comment.value);
    }
    
    
}