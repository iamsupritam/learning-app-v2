export interface TableConfigModel {
    needOperation: boolean;
    operations: Operation;

}

export interface Operation {
    isUpdate: boolean;
    isDelete: boolean;
    isAdd: boolean;
}