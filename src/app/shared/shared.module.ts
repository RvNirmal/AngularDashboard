import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatListModule} from '@angular/material'
import { FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule} from 'highcharts-angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { SubChartComponent } from './widgets/sub-chart/sub-chart.component';
import { PieChartComponent } from './widgets/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    SubChartComponent,
    PieChartComponent,
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    SubChartComponent,
    PieChartComponent
  ]
})
export class SharedModule { }
