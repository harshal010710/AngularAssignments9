import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string 
  {
    let temp : string = "";
    
    for(let i = value.length - 1; i >= 0; i--)
    {
      temp = temp+value[i];
    }

    return temp;
  }

}
