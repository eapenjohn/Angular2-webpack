import {Pipe} from '@angular/core'


@Pipe({
    name:'datasetsearch'
})

export default class DatasetSearchPipe
{
    transform(input, search)
    {
     return input.filter((item)=> <any>item.name.indexOf(search) != -1);
    }
}