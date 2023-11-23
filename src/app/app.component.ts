import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kword';
  utily = require('./kword')
  description = ''
  value = ''
  inputWord = ''
  failFlag = false;
  score = 0;
  step = 0;

  ngOnInit(): void {
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
    if(this.step == 10){
      alert("你的成绩为" + this.score + '分')
    }
    let k = Object.keys(this.utily.data[0])
    let v = Object.values(this.utily.data[0])
    let n = Math.floor(Math.random()*Object.keys(this.utily.data[0]).length)
    this.description = String(v[n]);
    this.value = String(k[n])
  }

}
