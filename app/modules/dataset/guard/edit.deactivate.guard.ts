import {
    CanDeactivate
} from '@angular/router'

import {
    DatasetEditComponent
} from '../edit/edit.component'

export class EditDeactivateGuard implements CanDeactivate < DatasetEditComponent > {


    canDeactivate(edit: DatasetEditComponent, route, state) {
        if (edit.dirty) {
            var nav = confirm("Do you really want to move away");
            return nav;
        }
        return true;
    }
}