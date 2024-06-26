import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sst',
  templateUrl: './sst.component.html',
  styleUrls: ['./sst.component.css']
})
export class SstComponent implements OnInit {

  constructor() { }
  step = 0;
  score = 0;
  title = ''
  titleDescription = ''
  inputWord = ''
  english = ''
  failFlag = false;
  tempWord = {};
  Array = [{china:'',english:'',inputWord:''}];
  utily = require('../../SST.js')

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
    this.inputWord = '';
    this.Array = [{china:'',english:'',inputWord:''}];
    if(this.step > 5){
      alert("你的成绩为" + this.score + '分')
    }
    let n = Math.floor(Math.random()*Object.keys(this.utily.data).length)
    this.title = this.utily.data[n].title
    this.titleDescription = this.utily.data[n].titleDescription
    this.Array = this.utily.data[n].array;
    this.english =  this.utily.data[n].english; 
  }

  submit(){
    if(this.english == this.inputWord){
      if(this.failFlag == false){
        this.score++;
      }
      this.new();
    }else {
      this.failFlag = true;
    }
  }

}
