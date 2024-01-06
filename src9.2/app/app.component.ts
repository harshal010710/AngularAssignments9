import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddPipe } from './add.pipe';
import { MultPipe } from './mult.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddPipe, MultPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num1 : number = 0;
  num2 : number = 0;

  getNum1(val : any)
  {
    this.num1 = parseInt(val);
  }

  getNum2(val : any)
  {
    this.num2 = parseInt(val);
  }
}
