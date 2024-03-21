import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiseService } from 'src/app/app-servise.service';

@Component({
  selector: 'app-kword-list',
  templateUrl: './kword-list.component.html',
  styleUrls: ['./kword-list.component.css']
})
export class KwordListComponent implements OnInit {

  constructor(
    public router: Router,
    public appservise: AppServiseService
  ) { }

  ngOnInit(): void {
  }

  kword(e:any){
    this.router.navigate(['/kword'])
    this.appservise.level = e;
  }

}
