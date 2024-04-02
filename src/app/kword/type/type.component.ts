import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiseService } from 'src/app/app-servise.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(
    public router: Router,
    public appservise: AppServiseService
  ) { }

  ngOnInit(): void {
  }

  link(e:any){
    if(e == 'RO'){
      this.router.navigate(['/RO'])
    }
  }

}