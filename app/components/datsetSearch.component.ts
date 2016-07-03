import {Component,Output,EventEmitter} from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    directives:[ROUTER_DIRECTIVES],
    selector:'dataset-serach',
    template:`
     <h3>Search</h3> <input type='text' #search (input)='searchTerm.emit(search.value)'/>
    `
})

export default class DatasetSearch
{
    @Output() searchTerm=new EventEmitter();;
    ngOnInit()
    {
    this.searchTerm.emit('');
    }
}