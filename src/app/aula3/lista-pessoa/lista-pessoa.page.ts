import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.page.html',
  styleUrls: ['./lista-pessoa.page.scss'],
})
export class ListaPessoaPage implements OnInit {

  lista: any = []
  //lista = [
  //  { nome: 'Ana Souza', idade: 19, genero: 'feminino' },
  //  { nome: 'Bia Bia', idade: 34, genero: 'feminino' },
  //  { nome: 'Claudinha Laa', idade: 49, genero: 'feminino' },
  //  { nome: 'Rapunzel Curta', idade: 67, genero: 'feminino' },
  //  { nome: 'Chapauzinho Verde', idade: 99, genero: 'feminino' }
  //]


  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    const aux: any = localStorage.getItem('pacientes')
    this.lista = JSON.parse(aux)
    console.log('lista.pacienetes')
  }

  exibeCadastro() {
    this.nav.navigateForward('cadastro-pessoa');
  }

}
