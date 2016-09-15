import {
    Component
} from '@angular/core'

import {
    Observable
} from 'rxjs/Rx'

import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms'

import {
    RequiredValidator
} from './required.validator'

@Component({
    selector: 'addd',
    template: require('./new.html')
})

export class NewDatasetComponent {
    myForm: FormGroup;
    category;

    constructor() {
        this.category = new FormControl('', [RequiredValidator])
        this.myForm = new FormGroup({
            name: new FormControl("", [Validators.required]),
            description: new FormControl("", [Validators.maxLength(5)]),
            supplierName: new FormControl("", [Validators.required])
        });

        this.myForm.valueChanges.filter(() => true).do(form => console.log(form)).subscribe();

    }

    save() {
        alert('d')
    }

}