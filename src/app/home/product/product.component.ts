import { Component, OnInit } from '@angular/core';
import { TableConfigModel } from 'src/app/app-models/table-component.model';
import { CustomSortPipe } from 'src/app/app-pipes/app-pipes/custom-sort.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'] 
})
export class ProductComponent implements OnInit {

  productArry!: any[];
  tableConfig!: TableConfigModel;
  tableHeader!: string;

  customSort: CustomSortPipe = new CustomSortPipe();

  constructor() { }

  ngOnInit(): void {
    this.tableHeader = "Product List"
    this.tableConfig = {
      needOperation: true,
      showFooter: true,
      operations: {
        isDelete: true,
        isUpdate: true,
        isAdd: true
      }
    };
    this.productArry = this.getProducts().slice(0, 10);
  }

  deleteProduct(param: any) {
    if(confirm("Wish to delete therecord?")){
      console.log(param);
      this.productArry = this.productArry.filter(f=>f !== param);
    }
  }

  showProductPerPage(rowNumber: number) {
    this.productArry = this.getProducts().slice(0, rowNumber);
  }

  productSorting(column: string) {
    this.productArry = this.customSort.transform(this.productArry, column);
  }

  getProducts(): any[] {
    this.productArry = [
      {
        ID: 10,
        Name: 'Soap',
        Address: 'a'
      },
      {
        ID: 2,
        Name: 'Soap',
        Address: 'b'
      },
      {
        ID: 3,
        Name: 'Soap',
        Address: 'c'
      },
      {
        ID: 4,
        Name: 'Soap',
        Address: 'd'
      },
      {
        ID: 6,
        Name: 'Soap',
        Address: 'e'
      },
      {
        ID: 5,
        Name: 'Soap',
        Address: 'f'
      },
      {
        ID: 7,
        Name: 'Soap',
        Address: 'g'
      },
      {
        ID: 8,
        Name: 'Soap',
        Address: 'h'
      },
      {
        ID: 9,
        Name: 'Soap',
        Address: 'i'
      },
      {
        ID: 10,
        Name: 'Soap',
        Address: 'j'
      },
      {
        ID: 1,
        Name: 'Soap',
        Address: 'k'
      },
      {
        ID: 2,
        Name: 'Soap',
        Address: 'l'
      }
    ];
    return this.productArry;
  }

}
