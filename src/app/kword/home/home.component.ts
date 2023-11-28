import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiseService } from 'src/app/app-servise.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
    public appservise: AppServiseService
  ) { 
    
  }

  ngOnInit(): void {
  }

  kword(e:any){
    this.router.navigate(['/kword'])
    this.appservise.level = e;
  }

}
