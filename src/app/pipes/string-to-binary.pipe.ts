import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToBinary',
  standalone: true
})
export class StringToBinaryPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }
    return value.split('').map(char => {
      return char.charCodeAt(0).toString(2);
    }).join(' ');
  }
}
