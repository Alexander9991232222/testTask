import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ChartsModule,
        CommonModule,
    ],
    exports: [PieChartComponent],
    declarations: [PieChartComponent],
})
export class PieChartModule { }
