import {Pipe} from 'angular2/core'

@Pipe(
    {
        name:'datasetFilter'
    }
)

export class DatasetFilterPipe
{
    transform(input:Array<any>)
    {
        alert('s')
        return input.filter((item)=> !item.hide);
       // return input;
    }
}