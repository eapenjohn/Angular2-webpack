import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

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

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private route: Router) {

  }
  ngOnInit() {

    this.activatedRoute.data.subscribe(data => {
      this.user = data.user;
    });

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
      }).subscribe();
  }

  canDeactivate() {
    return this.isPristine;
  }

  Save() {
    this.user.avatar = this.editForm.controls.avatar.value;
    this.user.name = this.editForm.controls.userName.value;;
    this.user.description = this.editForm.controls.description.value;
    return this.userService
      .save(this.user)
      .do(() => this.isPristine = true)
      .subscribe((user) => {
        this.route.navigate(['./users/' + user.id])
      });
  }

}

EditComponent['parameters'] = [UserService, ActivatedRoute, Router]