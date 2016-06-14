export class Dataset implements IDataset
{
    name:string;
    description:string;
    supplierName:string;
    id:string;
    hide:boolean=false;
}

export interface IDataset 
{
     name:string;
    description:string;
    supplierName:string;
    id:string;
     hide:boolean;
}