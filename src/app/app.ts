import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[NgFor],
  styleUrl: './app.scss'
})
export class App {
  protected title = 'prod-app';
  salesData = [65, 59, 80, 81, 56, 55]; // Percent heights

}
