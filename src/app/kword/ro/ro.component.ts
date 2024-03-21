import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ro',
  templateUrl: './ro.component.html',
  styleUrls: ['./ro.component.css']
})
export class RoComponent implements OnInit {
  title = 'kword';
  tempWord = {};
  utily = require('../../ro')
  constructor() { }

  ngOnInit(): void {
    this.new();
  }

  new(){
    let n = Math.floor(Math.random()*Object.keys(this.utily.data).length)
    this.title = this.utily.data[n].title;
  }
}
