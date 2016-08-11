import {
    Component
} from '@angular/core'

import {
    REACTIVE_FORM_DIRECTIVES,
    FormGroup,
    FormControl,
    Validators
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
            name: new FormControl("Name", [Validators.required]),
            description: new FormControl("description", [Validators.maxLength(5)]),
            supplierName: new FormControl("Supplier Name", [Validators.required])
        });
    }

}