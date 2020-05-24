import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
    ],
    exports: [TableComponent],
    declarations: [TableComponent],
    providers: [],
})
export class TableModule { }
