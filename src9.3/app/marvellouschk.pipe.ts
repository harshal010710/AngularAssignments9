import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk',
  standalone: true
})
export class MarvellouschkPipe implements PipeTransform {

  transform(value: number, param: string): string 
  {
    if(param == 'prime')
    {
        let i = 2;

        while(i <= (value/2))
        {
          if(value % i == 0)
          {
            return 'number is non-prime';
          }
          i++;
        }

        return 'number is prime';
    }

    else if(param == 'even')
    {
      if(value % 2 == 0)
      {
        return 'number is even';
      }
      else
      {
        return 'number is not even';
      }
    }

    else if(param == 'odd')
    {
      if(value % 2 != 0)
      {
        return 'number is odd';
      }
      else
      {
        return 'number is not odd';
      }
    }
    return 'null';
  }

}
