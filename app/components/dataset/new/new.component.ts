import {
    Component
} from '@angular/core'

import {
    REACTIVE_FORM_DIRECTIVES,
    FormGroup,
    FormControl
} from '@angular/forms'

@Component({
    selector: 'addd',
    template: require('./new.html'),
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class NewDatasetComponent {
    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup({
            name: new FormControl("Name"),
            description: new FormControl("description"),
            supplierName: new FormControl("Supplier Name")
        });
    }

}