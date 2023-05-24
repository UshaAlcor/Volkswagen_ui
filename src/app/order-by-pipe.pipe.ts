import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe',
})
export class OrderByPipePipe implements PipeTransform {
  transform(array: any, field: string, isAscending: boolean): any[] {
    if (isAscending) {
      array.sort((a: any, b: any) => a[field].localeCompare(b[field], 'tr'));

      return array;
    } else {
      array.sort((a: any, b: any) => b[field].localeCompare(a[field], 'tr'));

      return array;
    }
  }
}
