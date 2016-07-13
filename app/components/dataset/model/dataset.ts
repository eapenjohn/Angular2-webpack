export class Dataset implements IDataset
{
    constructor(public name, public description, public supplierName,public id)
    {

    }  

     hide: boolean;
}

export interface IDataset 
{
     name:string;
    description:string;
    supplierName:string;
    id:string;
     hide:boolean;
}