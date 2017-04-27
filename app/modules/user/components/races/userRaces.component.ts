import { Component } from '@angular/core'
import {ActivatedRoute} from '@angular/router'


@Component({
    selector:'user-races',
    template: require('./userRaces.html')
})

export default class UserRacesComponent
{
}

UserRacesComponent['parameters'] =[ ActivatedRoute]
