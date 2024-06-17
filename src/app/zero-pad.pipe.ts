import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPad'
})
export class ZeroPadPipe implements PipeTransform {

  transform(value: number, length: number = 4): string {
    return value.toString().padStart(length, '0');
  }

}
