import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableConfigModel } from 'src/app/app-models/table-component.model';

@Component({
  selector: 'app-sd-table',
  templateUrl: './sd-table.component.html',
  styleUrls: ['./sd-table.component.scss']
})
export class SdTableComponent implements OnInit {

  @Input() data!: any[];
  @Input() basicConfig!: TableConfigModel;
  @Input() tableHeader!: string;

  @Output() deleteClickEvent: EventEmitter<any> = new EventEmitter();
  @Output() rowPerPageChangeEvent: EventEmitter<any> = new EventEmitter();
  @Output() sortColumnEvent: EventEmitter<any> = new EventEmitter();

  columns!: string[];
  sortedColumn!: string;

  constructor() { }

  ngOnInit(): void {
    this.columns = Object.keys(this.data[0]);
  }

  isDate(val: any) : boolean {
    return typeof val.getMonth === 'function';
  }

  sortColumn(currentColumn: string) {
    this.sortedColumn = currentColumn;
    this.sortColumnEvent.emit(this.sortedColumn);
  }

  deleteRecord(row: any) {
    this.deleteClickEvent.emit(row);
  }

  RowsPerPage(e: any){
    this.rowPerPageChangeEvent.emit(e.target.value);
  }

}
