import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MarvellouschkPipe } from './marvellouschk.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MarvellouschkPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title : string= 'Assign';

  num : number = 10;

  GetNum(val : any)
  {
    this.num = parseInt(val);
  }

  GetStr(str : any)
  {
    this.title = str;
  }

}
