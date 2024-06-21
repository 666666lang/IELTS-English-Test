import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiseService } from 'src/app/app-servise.service';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {

  constructor(
    public router: Router,
    public appservise: AppServiseService
  ) { }

  ngOnInit(): void {
  }

  kword(e:any){
    this.router.navigate(['/FIB'])
    this.appservise.level = e;
  }

}
