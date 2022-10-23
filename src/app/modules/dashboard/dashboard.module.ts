import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartSimpleComponent } from './components/chart-simple/chart-simple.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartSimpleComponent,
    ChartBarComponent,
    ChartPieComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  entryComponents: [
    ChartSimpleComponent,
    ChartBarComponent,
    ChartPieComponent,
  ]
})
export class DashboardModule { }
