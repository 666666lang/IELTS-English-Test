import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ro',
  templateUrl: './ro.component.html',
  styleUrls: ['./ro.component.css']
})
export class RoComponent implements OnInit {
  title = 'kword';
  tempWord = {};
  selected = 0;
  score = 0;
  utily = require('../../ro')
  desArr = ['0','0']
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.new();
  }

  new(){
    this.desArr = ['0','0'];
    let n = Math.floor(Math.random()*Object.keys(this.utily.data).length)
    this.selected = n;
    this.title = this.utily.data[n].title;
    let indexN = Math.floor(Math.random()*2)
    this.desArr[indexN] = this.utily.data[n].secret;
    for(let i=0;i<2;i++){
      if(this.desArr[i] == '0'){
        let newN = Math.floor(Math.random()*Object.keys(this.utily.data).length);
        this.desArr[i] = this.utily.data[newN].secret;
      }
    }
  }

  select(e:any){
    if(e == this.utily.data[this.selected].secret){
      this.score++;
      this.new();
    }else{
      window.location.reload();
    }
  }
}
