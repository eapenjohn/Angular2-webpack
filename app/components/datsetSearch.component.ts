import {Component,Output,EventEmitter} from '@angular/core'

@Component({
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
        alert('ss')
    this.searchTerm.emit('');
    }
}