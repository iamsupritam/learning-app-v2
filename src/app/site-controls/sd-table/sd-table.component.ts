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
  columns!: string[];

  constructor() { }

  ngOnInit(): void {
    this.columns = Object.keys(this.data[0]);
  }

  isDate(val: any) : boolean {
    return typeof val.getMonth === 'function';
  }

  deleteRecord(row: any) {
    this.deleteClickEvent.emit(row);
  }

}
