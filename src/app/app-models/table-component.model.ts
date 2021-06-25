export interface TableConfigModel {
    needOperation: boolean;
    operations: Operation;
    showFooter: boolean;
}

export interface Operation {
    isUpdate: boolean;
    isDelete: boolean;
    isAdd: boolean;
}