import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib-l',
  templateUrl: './fib-l.component.html',
  styleUrls: ['./fib-l.component.css']
})
export class FibLComponent implements OnInit {

  constructor() { }
  step = 0;
  score = 0;
  title = ''
  titleDescription = ''
  failFlag = false;
  tempWord = {};
  china='';
  english='';
  tempAnswer:Array<string> = [];
  temp = '';
  Array = [{china:'',english:'',inputWord:'',answer:''}];
  utily = require('../../FIB-L.js')

  ngOnInit(): void {
    for(let i = 0;i<this.utily.data.length;i++){
      this.utily.data[i].inputWord = ' ';
      this.tempWord = Object.assign(this.tempWord, this.utily.data[i]);
    }
    this.new();
  }

  new(){
    this.step++;
    this.failFlag = false;
    this.Array = [{china:'',english:'',inputWord:'',answer:''}];
    this.tempAnswer = [];
    if(this.step > 5){
      alert("你的成绩为" + this.score + '分')
    }
    let n = Math.floor(Math.random()*Object.keys(this.utily.data).length)
    this.title = this.utily.data[n].title
    this.titleDescription = this.utily.data[n].titleDescription
    this.Array = this.utily.data[n].array;
    for(let i = 0;i<this.Array.length;i++){
      this.tempAnswer.push('');
    }
    this.english = this.utily.data[n].english;
    this.china = this.utily.data[n].china;
  }

  submit(){
    if(JSON.stringify(this.tempAnswer) == JSON.stringify(this.Array)){
      if(!this.failFlag){
        this.score++;
      }
      this.new();
    }else{
      this.failFlag = true;
    }
  }

}
