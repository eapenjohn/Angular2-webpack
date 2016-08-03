export class Dataset implements IDataset {
    constructor(public name, public description, public supplierName, public id) {
        this.visible = true;
    }

    visible: boolean;
}

export interface IDataset {
    name: string;
    description: string;
    supplierName: string;
    id: string;
    visible: boolean;
}