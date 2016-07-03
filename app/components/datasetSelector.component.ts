import {Component,Output,EventEmitter} from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
       directives:[ROUTER_DIRECTIVES],
    selector:'dataset-selector',
    template:`
   <input type='checkbox' #select (change)='change(select)' value='Hide Datasets'/>
    `
})

export class DatasetSelectorComponent
{
    @Output() selector=new EventEmitter(); 

    change($event)
    {
      
     this.selector.emit($event.checked);
    }

    ngOnInit()
    {
      this.selector.emit(false);
    }
}