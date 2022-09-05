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

  public coins$: Observable<any>;

  url = 'https://economia.awesomeapi.com.br/last';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  convert(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  addNewList(value) {
    this.list.push(value);
  }
}
