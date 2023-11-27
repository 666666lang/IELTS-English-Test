import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.new();
    // this.route.queryParams.subscribe((data)=>{
    //   debugger
    //   console.log(data)
    // })
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
    let k = Object.keys(this.utily.data[0])
    let v = Object.values(this.utily.data[0])
    let n = Math.floor(Math.random()*Object.keys(this.utily.data[0]).length)
    this.description = String(v[n]);
    this.value = String(k[n])
  }

}
