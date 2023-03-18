import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {


  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  /** 
   * Redireciona o usuario para a pagina 'toPage'
    * @param toPage: o uri da pagina destino
  */
  move(toPage:string):void{
    this.nav.navigateForward(toPage);
  }

}
