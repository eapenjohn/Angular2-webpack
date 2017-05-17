import {NgModule} from '@angular/core'

import {MaterialModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout'
import { FormsModule ,ReactiveFormsModule } from '@angular/forms'
import '@angular/flex-layout/bundles/flex-layout.umd.js'

@NgModule({
 imports:[],
 exports:[FlexLayoutModule,MaterialModule,FormsModule,ReactiveFormsModule]
})

export default class CommonModule
{

}