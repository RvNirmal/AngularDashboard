import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-sub-chart',
  templateUrl: './sub-chart.component.html',
  styleUrls: ['./sub-chart.component.scss']
})
export class SubChartComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  Highcharts = Highcharts;
  @Input() data: any = [];
  chartOptions = {};

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderwidth: 0,
          margin:[2,2,2,2],
          height: 60,
      },
      accessibility: {
          description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
     
      tooltip: {
          split: true,
          outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
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
