import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult',
  standalone: true
})
export class MultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    
    const[x] = args;
    
    return value * x;
  }

}
