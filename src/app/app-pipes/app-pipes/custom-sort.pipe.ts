import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSort',
  pure: true
})
export class CustomSortPipe implements PipeTransform {

  sortOrder: boolean = true;

  transform(list: any[], column: string): any[] {
    if(this.sortOrder){
      let sortArray = list.sort((a,b) => {
        if(a[column] > b[column]) {
          return 1;
        }
        if(a[column] < b[column]) {
          return -1;
        }
        return 0;
      });
      this.sortOrder = !this.sortOrder;
      return sortArray;
    }
    else{
      let sortArray = list.sort((a,b) => {
        if(b[column] > a[column]) {
          return 1;
        }
        if(b[column] < a[column]) {
          return -1;
        }
        return 0;
      });
      this.sortOrder = !this.sortOrder;
      return sortArray;
    }
    
  }

}
