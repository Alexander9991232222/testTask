import { Component, OnInit } from '@angular/core';
import { MockDataService } from '@services/mock-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  public listDataTable = null;
  public displayedColumns = null;
  public totalRow = null;
  public dataSource = null;
  public pieChartLabels = null;
  public pieChartData = null;
  public isLoadData = false;

  constructor(
    private _mockDataService: MockDataService
  ) { }

  ngOnInit(): void {
    this.BuildTable();
    this.BuildPieChart();
    
    this.isLoadData = true;
  }

  private BuildTable(): void {
    this.listDataTable = this._mockDataService.GetTableList();
    this.displayedColumns = Object.keys(this.listDataTable[0]);

    this.totalRow = this._mockDataService.GetTotalRow();

    this.dataSource = new MatTableDataSource(this.listDataTable);
  }

  private BuildPieChart(): void {
    this.pieChartLabels = this._mockDataService.GetModelData().tipes
      .map(a => a.nameCategory);

    this.pieChartData = this._mockDataService.GetModelData().tipes
      .map(a => this._mockDataService.GetSumValueCatrgory(a.listItems));
  }
}
