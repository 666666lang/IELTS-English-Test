import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {
  step = 0;
  score = 0;
  failFlag = false;
  description = ''
  inputWord = ''
  value = ''
  tempWord = {};
  utily = require('../../six.js')

  constructor() { }

  ngOnInit(): void {
    for(let i = 0;i<this.utily.WFD.length;i++){
      this.tempWord = Object.assign(this.tempWord, this.utily.WFD[i]);
    }
    this.new();
  }

  submit(){
    if(this.value == this.inputWord){
      if(this.failFlag == false){
        this.score++;
      }
      this.new()
    }else {
      this.failFlag = true;
    }
  }

  new(){
    this.step++;
    this.failFlag = false;
    this.inputWord = '';
    if(this.step > 50){
      alert("你的成绩为" + this.score + '分')
    }
    let n = Math.floor(Math.random()*Object.keys(this.utily.WFD).length)
    this.description = this.utily.WFD[n].description
    this.value = this.utily.WFD[n].content
    this.inputWord = this.utily.WFD[n].content.substring(0,this.value.length/2);
    setTimeout(()=>{
      this.inputWord = '';
    },2000);
  }

}
