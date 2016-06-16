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
        //return input.filter((item)=> item.name.length >0);
        return input;
    }
}