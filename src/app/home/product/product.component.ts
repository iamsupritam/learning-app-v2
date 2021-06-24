import { Component, OnInit } from '@angular/core';
import { TableConfigModel } from 'src/app/app-models/table-component.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productArry!: any[];
  tableConfig!: TableConfigModel;
  tableHeader!: string;

  constructor() { }

  ngOnInit(): void {
    this.tableHeader = "Product List"
    this.tableConfig = {
      needOperation: true,
      operations: {
        isDelete: true,
        isUpdate: true,
        isAdd: true
      }
    };
    this.productArry = [
      {
        ID: 1,
        Name: 'Soap',
        Address: 'abc, abc, tamluk WB'
      },
      {
        ID: 2,
        Name: 'Soap',
        Address: 'abc, abc, tamluk WB'
      },
      {
        ID: 3,
        Name: 'Soap',
        Address: 'abc, abc, tamluk WB'
      },
      {
        ID: 4,
        Name: 'Soap',
        Address: 'abc, abc, tamluk WB'
      }
    ];
  }

  deleteProduct(param: any) {
    if(confirm("Wish to delete therecord?")){
      console.log(param);
      this.productArry = this.productArry.filter(f=>f !== param);
    }
  }

}
