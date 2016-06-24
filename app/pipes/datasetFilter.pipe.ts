import {Pipe} from '@angular/core'

@Pipe(
    {
        name:'datasetFilter'
    }
)

export class DatasetFilterPipe
{
    transform(input:Array<any>,selector)
    {      
        return input.filter((item)=> item.hide==selector);     
    }

}