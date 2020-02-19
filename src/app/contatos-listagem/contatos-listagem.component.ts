import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [
    {id:1 , nome: 'leandro', email: 'leandrogostos@gmail.com'},
    {id:2 , nome: 'maria', email: 'mariaLinda@gmail.com'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
