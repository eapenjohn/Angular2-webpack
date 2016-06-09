export class Dataset implements IDataset
{
    name:string;
    description:string;
    supplierName:string;
    id:string;
}

export interface IDataset 
{
     name:string;
    description:string;
    supplierName:string;
    id:string;
}