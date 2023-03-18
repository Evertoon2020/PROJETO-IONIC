import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.page.html',
  styleUrls: ['./lista-pessoa.page.scss'],
})
export class ListaPessoaPage implements OnInit {

  lista = [
    { nome: 'Ana Souza', idade: 19, genero: 'feminino' },
    { nome: 'Bia Bia', idade: 34, genero: 'feminino' },
    { nome: 'Claudinha Laa', idade: 49, genero: 'feminino' },
    { nome: 'Rapunzel Curta', idade: 67, genero: 'feminino' },
    { nome: 'Chapauzinho Verde', idade: 99, genero: 'feminino' }
  ]


  constructor() { }

  ngOnInit() {
  }

}
