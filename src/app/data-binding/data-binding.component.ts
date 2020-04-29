import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: any = 'http://loiane.com';
  cursorAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';

  getValor(){ // função
    return 1;
  }

  getCurtirCurso(){

    return true;
  }

  botaoClicado(){
    alert('fui clicado!');
  }

  onKeyUp(evento){
    //console.log(evento);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
