import { Component, Input, OnInit, Output } from '@angular/core';
import { ConversorServiceService } from 'src/app/services/conversor-service.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent implements OnInit {
  list: any = [];
  @Input() isEuro:boolean = false
  constructor(private service: ConversorServiceService) {}

  ngOnInit(): void {
    this.list = this.service.list
  }
}
