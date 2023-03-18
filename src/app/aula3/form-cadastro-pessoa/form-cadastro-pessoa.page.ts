import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-cadastro-pessoa',
  templateUrl: './form-cadastro-pessoa.page.html',
  styleUrls: ['./form-cadastro-pessoa.page.scss'],
})
export class FormCadastroPessoaPage implements OnInit {
  nome = ''
  idade = ''
  genero = ''
  lista = []


  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
    const aux: any = localStorage.getItem('pacientes')
    this.lista = aux ? JSON.parse(aux) : []
    console.log('formulario')
  }

  save() {
    const nome = this.nome
    const idade = this.idade
    const genero = this.genero
    const obj: any = { nome, idade, genero }
    const data = JSON.stringify(this.lista.concat(obj))
    localStorage.setItem('pacientes', data)
    this.nav.navigateBack('pessoa');
  }
}
