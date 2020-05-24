import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartModule } from './components/pie-chart/pie-chart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { TableModule } from './components/table/table.module';
import { MockDataService } from '@services/mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    PieChartModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
