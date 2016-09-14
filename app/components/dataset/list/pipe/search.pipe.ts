import {
    Pipe
} from '@angular/core'

@Pipe({
    name: 'datasetsearch'
})

export class SearchPipe {
    transform(data: Array < any > , selector) {
        return data == undefined ? [] : data.filter((item) => item.name.indexOf(selector) != -1);
    }
}