import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueListComponent, DetailsComponent } from './pages';

const routes: Routes = [
  { path: '', component: IssueListComponent },
  { path: 'details', component: DetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}