import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  downloads: number;
  rating: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'App 1', downloads: 137416, rating: 4.5},
  {position: 2, name: 'App 2', downloads: 632478, rating: 4.2},
  {position: 3, name: 'App 3', downloads: 32147, rating: 4.6},
  {position: 4, name: 'App 4', downloads: 87474, rating: 4.0},
  {position: 5, name: 'App 5', downloads: 36987, rating: 4.1},
  {position: 6, name: 'App 6', downloads: 124741, rating: 4.7},
  {position: 7, name: 'App 7', downloads: 98631, rating: 4.5},
  {position: 8, name: 'App 8', downloads: 74841, rating: 4.3},
  {position: 9, name: 'App 9', downloads: 214741, rating: 4.8},
  {position: 10, name: 'App 10', downloads: 63217, rating: 4.4},
  {position: 11, name: 'App 11', downloads: 87473, rating: 4.2},
  {position: 12, name: 'App 12', downloads: 33621, rating: 3.9},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  subCharts = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'downloads', 'rating'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.subCharts = this.dashboardService.subCharts();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
