import { CanDeactivate } from '@angular/router'

import { EditComponent } from '../../components'

export default class EditFormDeactive implements CanDeactivate<EditComponent>
{
    canDeactivate(editComponent: EditComponent) {
        if (!this.canDeactivate.isPristine) {
            return confirm('Do you really want to move away');
        }
          return true;
    }

}