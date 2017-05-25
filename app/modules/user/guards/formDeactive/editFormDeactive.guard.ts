import { CanDeactivate } from '@angular/router'
import {Observable}  from 'rxjs'

import { EditComponent } from '../../components'

// this means all forms just need to implement this interface. just need one guard for all the forms
interface CanComponentDeactive
{
    canDeactivate() : boolean | Observable<boolean>
}

export default class EditFormDeactive implements CanDeactivate<CanComponentDeactive>
{
    canDeactivate(editComponent: CanComponentDeactive) {
        if (!editComponent.canDeactivate()) {
            return confirm('Do you really want to move away');
        }
          return true;
    }

}