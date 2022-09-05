import { Component, OnInit } from '@angular/core';
import { ConversorServiceService } from 'src/app/services/conversor-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  valor: any;
  selectedCoin: any;
  inputCoin: any;
  data: Date;
  isEuro = false;

  constructor(private service: ConversorServiceService) {}

  ngOnInit() {}

  moedas: any = [
    { id: 'USD-BRL', name: 'Dolar' },
    { id: 'EUR-BRL', name: 'Euro' },
  ];

  convertForApi() {
    if (this.selectedCoin === 'EUR-BRL') {
      this.isEuro = true;
    }

    this.service
      .convert(this.selectedCoin)
      .subscribe((sucess) =>
        sucess.USDBRL
          ? this.service.addNewList(this.valor / sucess.USDBRL.low)
          : this.service.addNewList(this.valor / sucess.EURBRL.low)
      );
  }
}
