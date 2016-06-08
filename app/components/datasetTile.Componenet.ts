import {Component} from 'angular2/core'

@Component({
    selector:'dataset-tile',
    template:'<div>Dataset1</div> <input (click)="addToBasket()" type="button"/>'
})

export class DatasetTile
{
    constructor()
    {
        console.log('hi i am from datasettile')
    }
    
    addToBasket()
    {
        console.log('add to basket clciked');
    }
    
    
}