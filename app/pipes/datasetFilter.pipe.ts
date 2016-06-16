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
        return input.slice(1,2);
    }
}