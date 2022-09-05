import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { HttpClientModule } from '@angular/common/http';
//import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DashboardListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ///    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
