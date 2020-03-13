import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl =  'localhost:8082/categoria'; // postman app usado para testes de api

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`); // indo busca os registro no endereço da API informada acima
  }
  
}
