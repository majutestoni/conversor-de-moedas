import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorServiceService {
  list: any = [];
  valorFinal: any;
  moedaValor: any;

  public coins$:Observable<any> 

   url = 'https://economia.awesomeapi.com.br/last'

  constructor(private http: HttpClient) {}

  ngOnInit(){
  }

  convert(){
    this.http.get(this.url)
  }

  addNewList(valor, selectedCoin, inputCoin) {
    if (inputCoin == 'Real') {
      if (selectedCoin == 'Dolar') {
        this.moedaValor = 5;
        this.divisao(valor);
      } else {
        this.moedaValor = 10;
        this.divisao(valor);
      }
    } else if (inputCoin == 'Dolar') {
      if (selectedCoin == 'Real') {
        this.moedaValor = 5;
        this.multiplicacao(valor);
      } else {
        this.moedaValor = 5;
        this.divisao(valor);
      }
    } else {
      if (selectedCoin == 'Real') {
        this.moedaValor = 10;
        this.multiplicacao(valor);
      } else {
        this.moedaValor = 5;
        this.multiplicacao(valor);
      }
    }

    this.list.push(this.valorFinal);
  }

  multiplicacao(valor) {
    this.valorFinal = valor * this.moedaValor;
  }

  divisao(valor) {
    this.valorFinal = valor / this.moedaValor;
  }

}
