import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

import { UserService } from '../../services'
import { User, avatars } from '../../models'
@Component({
  selector: 'edit-user',
  template: require('./edit.html')
})

export default class EditComponent {
  editForm: FormGroup;
  user: User;
  avatars = avatars;
  public isPristine = true;;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    //  console.log(this.route.data)
    //   this.route.params.subscribe((params) => {
    // if (params.id) {
    //   this.userService.getById(+params.id).subscribe((user) => {
    //     this.user = user;
    //   })
    // }
    // else {
    //   this.user = new User();
    // }

    this.route.data.subscribe(user => {
      this.user = user;
    })
    // })


    this.editForm = new FormBuilder()
      .group({
        userName: new FormControl(this.user.name, [Validators.required]),
        description: new FormControl(this.user.description, [Validators.required]),
        avatar: new FormControl(this.user.avatar, [Validators.required])
      });

    this.editForm.valueChanges
      .filter(f => !f.pristine)
      .do(() => {
        this.isPristine = false;
        console.log('not pristine')
      }).subscribe();
  }
  Save() {

    this.user.avatar = this.editForm.controls.avatar.value;
    this.user.name = this.editForm.controls.userName.value;;
    this.user.description = this.editForm.controls.description.value;
    return this.userService
      .save(this.user)
      .subscribe();
  }

}

EditComponent.parameters = [UserService, ActivatedRoute]