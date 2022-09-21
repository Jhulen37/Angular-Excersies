import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotr',
  templateUrl: './lotr.component.html',
  styleUrls: ['./lotr.component.css'],
})
export class LotrComponent implements OnInit {
  name: string = 'Jack';
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
