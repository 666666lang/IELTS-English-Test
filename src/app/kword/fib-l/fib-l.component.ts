import { Component, OnInit } from '@angular/core';
import { AppServiseService } from 'src/app/app-servise.service';

@Component({
  selector: 'app-fib-l',
  templateUrl: './fib-l.component.html',
  styleUrls: ['./fib-l.component.css']
})
export class FibLComponent implements OnInit {

  constructor(
    public appservise: AppServiseService
  ) { }
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
    let l = Object.keys(this.utily.data).length;
    if(this.appservise.level == 1){
      l = 63
    }else if (this.appservise.level == 2){
      l = 163
    }
    else if (this.appservise.level == 3){
      l = 363
    }
    let n = Math.floor(Math.random()*l)
    debugger
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
