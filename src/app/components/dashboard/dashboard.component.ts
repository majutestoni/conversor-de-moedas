import { Component, OnInit } from '@angular/core';
import { ConversorServiceService } from 'src/app/services/conversor-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  valor: any;
  selectedCoin: any;
  inputCoin: any;
  data: Date
  public coins$:Observable<any> 

  constructor(private service: ConversorServiceService, private http: HttpClient) {}

  ngOnInit(){
   // this.http.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL")
   // .subscribe(d => console.log(d)) -> Forma para debugar uma api

    this.coins$ =  this.http.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL")

  }

  moedas: any = [
    { id: 1, name: 'Dolar' },
    { id: 2, name: 'Real' },
    { id: 3, name: 'Euro' },
  ];

  addList(): void {
    this.data = new Date
    this.service.addNewList(this.valor, this.selectedCoin, this.inputCoin);
    this.valor = '';
  }
}
