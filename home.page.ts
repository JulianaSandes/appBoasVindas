import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   n1:string='';
   n2:string='';
   res:number=0;

  constructor() {}

  somar(){
    this.res=parseFloat(this.n1)+parseFloat(this.n2);
  }


}
