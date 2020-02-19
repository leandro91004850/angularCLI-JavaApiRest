import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl =  'http://localhost:8084/categorias'; // postman app usado para testes de api

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`); // indo busca os registro no endereço da API informada acima
  }
}
