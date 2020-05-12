import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  @Input() data = [];
  constructor() { }

  ngOnInit() {
    Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
          return {
              radialGradient: {
                  cx: 0.5,
                  cy: 0.3,
                  r: 0.7
              },
              stops: [
                  [0, color],
                  [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
              ]
          };
      })
  });
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'App Usage'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  connectorColor: 'silver'
              }
          }
      },
      exporting:{
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: this.data
  };

  HC_exporting(Highcharts);
  
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
