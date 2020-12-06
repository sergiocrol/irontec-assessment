import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { HomeRoutingModule } from './home-routing.module';
import { 
  IssueListComponent, 
  DetailsComponent, 
  IssueBoxComponent, 
  IssueCardComponent, 
  IssuePaginationComponent,
  IssueChartComponent
} from './pages';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule, 
    SharedModule, 
    ChartsModule
  ],
  providers: [
  ],
  declarations: [
    IssueListComponent, 
    DetailsComponent, 
    IssueBoxComponent, 
    IssueCardComponent, 
    IssuePaginationComponent,
    IssueChartComponent
  ],
  exports: [
    IssueListComponent, 
    DetailsComponent, 
    IssueBoxComponent, 
    IssueCardComponent, 
    IssuePaginationComponent,
    IssueChartComponent
  ]
})
export class HomeModule {}