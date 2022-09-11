import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CountUpModule,
    NgbDropdownModule,
    NgApexchartsModule,
    UiModule,
    PageTitleModule,
    DashboardRoutingModule,
    ChartModule,
    SimplebarAngularModule,
    HighchartsChartModule,
    NgApexchartsModule,
    NgbCollapseModule
  ]
})
export class DashboardModule { }
