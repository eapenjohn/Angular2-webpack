import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

import UserService from '../../services'
import { User } from '../../models'
@Component({
  selector: 'edit-user',
  template: require('./edit.html')
})

export default class EditComponent {
  editForm: FormGroup;
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }
  ngOnInit() {

    this.route.params.subscribe((params) => {
      if (params.id) {
        this.userService.getById(+params.id).subscribe((user) => {
          this.user = user;
        })
      }
      else {
        this.user = new User();
      }
    })


    this.editForm = new FormBuilder().group({
      userName: new FormControl(this.user.name, [Validators.required]),
      description: new FormControl(this.user.description, [Validators.required])
    });
  }
  Save() {

    this.user.avatar = 'svg-1';
    this.user.name = this.editForm.controls.userName.value;;
    this.user.description = this.editForm.controls.description.value;
    return this.userService
      .save(this.user)
      .subscribe();
  }

}

EditComponent.parameters = [UserService, ActivatedRoute]