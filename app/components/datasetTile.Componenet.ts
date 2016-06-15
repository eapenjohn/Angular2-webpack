import {Component, Input,ViewEncapsulation} from 'angular2/core'
import {DatasetService} from '../services/dataset.service'

@Component({
    encapsulation:ViewEncapsulation.Emulated,
    selector: 'dataset-tile',
    template: `
    <style>
       .label 
       {
           font-weight:bold;
           color:red;
       }
       </style>
    <li>
       <span [ngClass]="'label'"> Name</span> {{dataset.name}}
        <br />
        Description {{dataset.hide}}
        <br />
        Hide the element {{dataset.hide}}
        <br />
      <input type='text' #comment>
      <br />
     <input (click)='addToBasket(comment)' value='add to basket' type='button'/>
     <br />
     <input type='button' (mouseover)=mouseover($event,comment) value='mouseOver'/>
     <hr/>
     </li>
     `
})

export class DatasetTile {
   @Input() dataset;
    constructor(datasetServive: DatasetService) {
        datasetServive.get();
        console.log('hi i am from datasettile')
    }

    addToBasket(comment) {
        console.log('add to basket clicked', comment.value);
    }

    mouseover($event, comment) {
        console.log($event);
        console.log('comments from mouseover control', comment.value)
    }
}

DatasetTile.parameters = [DatasetService];
 