import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueStandingsComponent } from './league-standings/league-standings.component';
import { TeamGamesComponent } from './team-games/team-games.component';

const routes: Routes = [
  {
    path: '',
    component: LeagueStandingsComponent
  },
  {
    path: 'teams/:teamId/games',
    component: TeamGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
