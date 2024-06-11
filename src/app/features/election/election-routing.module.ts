import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectionResultComponent } from './pages/election-result/election-result.component';
import { NewElectionComponent } from './pages/new-election/new-election.component';
import { ViewAllElectionsComponent } from './pages/view-all-elections/view-all-elections.component';
import { ViewElectionComponent } from './pages/view-election/view-election.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-all', pathMatch: 'full' },
  { path: 'view-all', component: ViewAllElectionsComponent },
  { path: 'new', component: NewElectionComponent },
  { path: 'result/:id', component: ElectionResultComponent },
  { path: ':id', component: ViewElectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionRoutingModule {}
