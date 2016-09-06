import {
    Component
} from '@angular/core'

import {
    Observable
} from 'rxjs/Rx'

import {
    REACTIVE_FORM_DIRECTIVES,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms'

import {
    RequiredValidator
} from './required.validator'

@Component({
    selector: 'addd',
    template: require('./new.html'),
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class NewDatasetComponent {
    myForm: FormGroup;
    category;

    constructor() {
        this.category = new FormControl('category', [RequiredValidator])
        this.myForm = new FormGroup({
            name: new FormControl("Name", [Validators.required]),
            description: new FormControl("description", [Validators.maxLength(5)]),
            supplierName: new FormControl("Supplier Name", [Validators.required])
        });

        this.myForm.valueChanges.filter(() => true).do(form => console.log(form)).subscribe();

    }

}