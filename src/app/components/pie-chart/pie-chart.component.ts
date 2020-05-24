import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
})

export class PieChartComponent implements OnInit {

  @Input() pieChartLabels: Array<string>;
  @Input() pieChartData: Array<number>;
  public pieChartType = 'pie';

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
