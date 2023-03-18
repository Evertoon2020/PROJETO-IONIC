import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public nome: string = '';
  public sobrenome: string = '';
  public nascimento: string = '';
  public genero: string = '';

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  back(){
    this.nav.navigateBack('welcome');
  }

  send(){
    console.log(this.nome);
    console.log(this.sobrenome);
    console.log(this.nascimento.toString().split('T')[0]);
    console.log(this.genero);

    const nome = this.nome;
    const sobrenome = this.sobrenome;
    const nascimento = this.nascimento.toString().split('T')[0];
    const genero = this.genero;

    const data = {nome, sobrenome, nascimento, genero};

    console.log(data);

    localStorage.setItem('pessoa', JSON.stringify(data));

    
  }

}
