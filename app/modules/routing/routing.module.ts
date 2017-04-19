import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {HomeModule}  from '../home'
import routes from './routing'
import  { HomeComponent} from '../home/components'

@NgModule({
 imports:[ RouterModule.forRoot(routes), HomeModule],
 bootstrap:[HomeComponent]
})

export default class RootRouterModule {

}