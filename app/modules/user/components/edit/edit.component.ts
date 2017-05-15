import { Component } from '@angular/core'

import UserService  from '../../services'

@Component({
    selector: 'edit-user',
    template: require('./edit.html')
})

export default class EditComponent {
   
   constructor( UserService:UserService)
   {

   }
   save(editForm)
   {
     console.log(editForm)
   }

}

EditComponent.parameters=[UserService]