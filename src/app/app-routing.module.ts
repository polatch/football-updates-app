import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueStandingsComponent } from './league-standings/league-standings.component';

const routes: Routes = [
  {
    path: '',
    component: LeagueStandingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
