import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  title = 'MARVELLOUS INFOSYSTEMS';
  constructor() { }

  fun() {
    this.title = 'Educating for Better tomorrow';
  }

}
