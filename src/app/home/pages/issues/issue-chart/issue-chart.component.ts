import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Issue } from 'src/app/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

interface ChartMonths {
  [year: string]: {
    [month: string]: number
  }
}

@Component({
  selector: 'app-chart',
  templateUrl: './issue-chart.component.html'
})
export class IssueChartComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;

  // Initial object for the last 6 months
  currentDate = new Date();
  currentYear = this.currentDate.getFullYear();
  currentMonth = this.currentDate.getMonth();
  currentDay = this.currentDate.getDate();
  chartMonths:ChartMonths = this.getLastMonths();
  issues:Issue[];

  // chart options
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      ticks: {
        stepSize: 1,
        precision: 0
      }
    }
  };
  chartLabels: Label[];
  chartType: ChartType = 'bar';
  chartLegend = true;
  
  // chart data
  chartData: ChartDataSets[];

  constructor(private store: Store<AppState>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.repoUrl) {
      this.chartMonths = this.getLastMonths();
    }
  }

  ngOnInit(): void {
    this.store.select(store => store.issues.list).subscribe(res => {
      this.issues = res;
      if (this.issues.length) {
        this.issues.map(issue => {
          const dateArray = issue.created_at.split('T')[0].split('-');
          const year = dateArray[0];
          let month = dateArray[1];
          month = month.charAt(0) === '0' ? month.substring(1) : month;

          // Fill the chartMOnths object with the last opened issues
          if(this.chartMonths.hasOwnProperty(year) && this.chartMonths[year].hasOwnProperty(month)) {
            this.chartMonths[year][month] = this.chartMonths[year][month] + 1;
          }
        });

        // Populate chart data
        const yearKey = Object.keys(this.chartMonths)[0];
        const monthKeys = Object.keys(this.chartMonths[yearKey]);
        this.chartData = [
          {
            data: [
              this.chartMonths[yearKey][monthKeys[0]],
              this.chartMonths[yearKey][monthKeys[1]],
              this.chartMonths[yearKey][monthKeys[2]],
              this.chartMonths[yearKey][monthKeys[3]],
              this.chartMonths[yearKey][monthKeys[4]],
              this.chartMonths[yearKey][monthKeys[5]]
            ], 
            label: 'Number of Issues'}
        ]
      }
    });
  }

  changeChartType(): void {
    this.chartType = this.chartType === 'bar' ? 'line' : 'bar';
  }

  getLastMonths():ChartMonths {
    const currentYear = new Date().getFullYear().toString();
    const currentMonth = new Date().getMonth() + 1;
    const firstMonth = (currentMonth - 5).toString();
    const secondMonth = (currentMonth - 4).toString();
    const thirdMonth = (currentMonth - 3).toString();
    const fourthMonth = (currentMonth - 2).toString();
    const fifthMonth = (currentMonth - 1).toString();
    const lastMonth = currentMonth.toString();

    // Assign the labels
    this.chartLabels = [
      this.currentMonthToName(firstMonth),
      this.currentMonthToName(secondMonth),
      this.currentMonthToName(thirdMonth),
      this.currentMonthToName(fourthMonth),
      this.currentMonthToName(fifthMonth),
      this.currentMonthToName(lastMonth),
    ]

    return {
      [currentYear]: {
        [lastMonth]: 0,
        [fifthMonth]: 0,
        [fourthMonth]: 0,
        [thirdMonth]: 0,
        [secondMonth]: 0,
        [firstMonth]: 0
      } 
    }
  }

  currentMonthToName (month:string) {
    const currentMonth = Number(month)-1;
    return new Date(this.currentYear, currentMonth, this.currentDay).toLocaleString('en-us', { month: 'long' });
  }

}