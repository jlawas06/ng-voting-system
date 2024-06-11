import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElectionRoutingModule } from './election-routing.module';
import { NewElectionComponent } from './pages/new-election/new-election.component';
import { ViewAllElectionsComponent } from './pages/view-all-elections/view-all-elections.component';
import { ViewElectionComponent } from './pages/view-election/view-election.component';
import { ElectionResultComponent } from './pages/election-result/election-result.component';


@NgModule({
  declarations: [
    ViewAllElectionsComponent,
    ViewElectionComponent,
    NewElectionComponent,
    ElectionResultComponent
  ],
  imports: [
    CommonModule,
    ElectionRoutingModule
  ]
})
export class ElectionModule { }
