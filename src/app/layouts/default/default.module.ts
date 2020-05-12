import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

import { DashboardService } from 'src/app/modules/dashboard.service';
import { MyAppsComponent } from 'src/app/modules/my-apps/my-apps.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    MyAppsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
