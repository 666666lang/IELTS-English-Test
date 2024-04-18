import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we',
  templateUrl: './we.component.html',
  styleUrls: ['./we.component.css']
})
export class WeComponent implements OnInit {

  constructor() { }
  step = 0;
  title = ''
  titleDescription = ''
  tempWord = {};
  one = ''
  oneDespection = ''
  oneAnswer = ''
  two = ''
  twoDespection = ''
  twoAnswer = ''
  three = ''
  threeDespection = ''
  threeAnswer = ''
  four = ''
  fourDespection = ''
  fourAnswer = ''
  utily = require('../../WE.js')

  ngOnInit(): void {
    for(let i = 0;i<this.utily.data.length;i++){
      this.tempWord = Object.assign(this.tempWord, this.utily.data[i]);
    }
    this.new();
  }

  new(){
    this.step++;
    let n = Math.floor(Math.random()*Object.keys(this.utily.data).length)
    this.title = this.utily.data[n].title
    this.titleDescription = this.utily.data[n].titleDescription
    this.one = this.utily.data[n].one
    this.two = this.utily.data[n].two
    this.three = this.utily.data[n].three
    this.four = this.utily.data[n].four
    this.oneDespection = this.utily.data[n].oneDespection
    this.twoDespection = this.utily.data[n].twoDespection
    this.threeDespection = this.utily.data[n].threeDespection
    this.fourDespection = this.utily.data[n].fourDespection
    this.oneAnswer = ''
    this.twoAnswer = ''
    this.threeAnswer = ''
    this.fourAnswer = ''
  }

  answer(){
    this.oneAnswer = this.one;
    this.twoAnswer = this.two;
    this.threeAnswer = this.three;
    this.fourAnswer = this.four;
  }

}
