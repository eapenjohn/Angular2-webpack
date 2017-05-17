import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import UserService from '../../services'

@Component({
  selector: 'edit-user',
  template: require('./edit.html')
})

export default class EditComponent {
  editForm: FormGroup;

  constructor(UserService: UserService) {
    this.editForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }
  save(editForm) {
    console.log(editForm)
  }

}

EditComponent.parameters = [UserService]