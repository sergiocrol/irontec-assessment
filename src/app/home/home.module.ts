import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IssueListComponent, DetailsComponent, IssueBoxComponent, IssueCardComponent } from './pages';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule, SharedModule
  ],
  providers: [
  ],
  declarations: [IssueListComponent, DetailsComponent, IssueBoxComponent, IssueCardComponent],
  exports: [IssueListComponent, DetailsComponent, IssueBoxComponent, IssueCardComponent]
})
export class HomeModule {}