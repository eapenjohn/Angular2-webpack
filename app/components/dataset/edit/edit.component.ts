import {Component} from '@angular/core'
import {Router,ActivatedRoute} from '@angular/router'

 import {DatasetService} from '../service/dataset.service'

@Component({
    selector:'dataset-edit',
    templateUrl:'/app/components/dataset/edit/edit.html',
    providers:[DatasetService]
})

export class DatasetEditComponent
{
    dataset;
  constructor(private routes:ActivatedRoute,private datasetService :DatasetService)
  {

  }

  ngOnInit()
  {
         var that=this;
    this.routes.params.subscribe(s=>
    {
         let id=s["id"];
        this.dataset=that.datasetService.getById(id);
    })

  }
}

DatasetEditComponent['parameters']=[ActivatedRoute,DatasetService]