import {Component, Input,ViewEncapsulation,Output,EventEmitter} from '@angular/core'
import {DatasetService} from '../services/dataset.service'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
   directives:[ROUTER_DIRECTIVES],
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
      <input type='checkBox' [(ngModel)]='dataset.hide' value='hide' >
      <br />
       <input (click)='datasetUpdateTrigger.emit(dataset)' value='update' type='button'/>
      <br />
     <input (click)='addToBasket(comment)' value='add to basket' type='button'/>
     <br />
     <hr/>
     </li>
     `
})

export class DatasetTile {
   @Input() dataset;
   @Output() datasetUpdateTrigger= new EventEmitter();
    constructor(datasetServive: DatasetService) {
      //  datasetServive.get();
      //  console.log('hi i am from datasettile')
    }

    addToBasket(comment) {
        console.log('add to basket clicked', comment.value);
    }

    mouseover($event, comment) {
        console.log($event);
        console.log('comments from mouseover control', comment.value)
    }
}

DatasetTile['parameters'] = [DatasetService];
 