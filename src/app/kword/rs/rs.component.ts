import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rs',
  templateUrl: './rs.component.html',
  styleUrls: ['./rs.component.css']
})
export class RsComponent implements OnInit {
  step = 0;
  score = 0;
  failFlag = false;
  description = ''
  inputWord = ''
  value = ''
  tempWord = {};
  utily = require('../../RS.js')

  constructor() { }

  ngOnInit(): void {
    for(let i = 0;i<this.utily.RS.length;i++){
      this.tempWord = Object.assign(this.tempWord, this.utily.RS[i]);
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
    if(this.step > 30){
      alert("你的成绩为" + this.score + '分')
    }
    let n = Math.floor(Math.random()*Object.keys(this.utily.RS).length)
    this.description = this.utily.RS[n].description
    this.value = this.utily.RS[n].content
    this.inputWord = this.utily.RS[n].content.substring(0,this.value.length);
    setTimeout(()=>{
      let t = this.findNthOccurrenceIndex(this.inputWord,' ',3);
      this.inputWord = this.utily.RS[n].content.substring(0,t+1);
    },6000);
  }

  findNthOccurrenceIndex(str:string, charToFind:string, n:number) {
    if (n <= 0) {
      return -1;
    }
   
    let index = str.indexOf(charToFind);
    let count = 1;
   
    while (count < n && index !== -1) {
      index = str.indexOf(charToFind, index + 1);
      count++;
    }
   
    return index;
  }

}
