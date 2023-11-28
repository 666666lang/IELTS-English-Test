import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiseService } from 'src/app/app-servise.service';

@Component({
  selector: 'app-kword-detail',
  templateUrl: './kword-detail.component.html',
  styleUrls: ['./kword-detail.component.css']
})
export class KwordDetailComponent implements OnInit {
  title = 'kword';
  utily = require('../../kword')
  description = ''
  value = ''
  inputWord = ''
  failFlag = false;
  score = 0;
  step = 0;
  level = 0;
  tempWord = {};
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public appservise: AppServiseService
  ) { }

  ngOnInit(): void {
    this.level = this.appservise.level;
    for(let i = 0;i<this.level;i++){
      this.tempWord = Object.assign(this.tempWord, this.utily.data[i]);
    }
    this.new();
    debugger
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
    if(this.step == 100){
      alert("你的成绩为" + this.score + '分')
    }
    let k = Object.keys(this.tempWord)
    let v = Object.values(this.tempWord)
    let n = Math.floor(Math.random()*Object.keys(this.tempWord).length)
    this.description = String(v[n]);
    this.value = String(k[n])
  }

}
