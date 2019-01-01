import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {

  title = 'MARVELLOUS INFOSYSTEMS';
  constructor() { }

  fun() {
   this.title = this.title.toUpperCase();
  }
  gun() {
      this.title = this.title.toLowerCase();
  }
}
