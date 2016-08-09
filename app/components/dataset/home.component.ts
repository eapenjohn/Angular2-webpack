import {
    Component
} from '@angular/core'
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    ListsComponent
} from './list/list.component'


@Component({
    selector: 'main',
    directives: [ROUTER_DIRECTIVES, ListsComponent],
    template: require('./home.html')
})


export class HomeComponent {

}