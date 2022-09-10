import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { EnergyRoutingModule } from './energy-routing.module';
import { EnergyComponent } from './energy.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    EnergyComponent
  ],
  imports: [
    CommonModule,
    CountUpModule,
    NgbDropdownModule,
    NgApexchartsModule,
    UiModule,
    PageTitleModule,
    EnergyRoutingModule,
    ChartModule,
    NgbProgressbarModule
  ]
})
export class EnergyModule { }
