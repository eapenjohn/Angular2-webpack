import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy
} from '@angular/common'

import UserModule  from '../user'
import {HomeModule}  from '../home'
import routes from './routing'
import  { HomeComponent} from '../home/components'

@NgModule({
 imports:[HomeModule,UserModule, RouterModule.forRoot(routes)],
 bootstrap:[HomeComponent],
  providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }]
})

export default class RootRouterModule {

}