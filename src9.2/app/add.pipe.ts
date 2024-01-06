import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add',
  standalone: true
})
export class AddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
    const[x] = args;
    return value + x;
  }

}
