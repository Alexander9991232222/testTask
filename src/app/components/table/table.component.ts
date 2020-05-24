import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() dataSource: MatTableDataSource<any>;
  @Input() displayedColumns: Array<string>;
  @Input() totalRow = null;

  constructor(
  ) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
