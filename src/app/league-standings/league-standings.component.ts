import { Component } from '@angular/core';
import { TeamResults } from '../core/models/team-results';
import { TopLeagueId } from '../core/enums/top-league-id';
import { StandingsService } from '../core/services/standings.service';

@Component({
  templateUrl: './league-standings.component.html'
})
export class LeagueStandingsComponent {
  countries: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  leagueStandings: TeamResults[] = [];

  constructor(private leagueService: StandingsService) {}

  getTopLeagueStandings(country: string) {
    const leagueId = TopLeagueId[country as keyof typeof TopLeagueId];
    this.leagueService
      .getActualSeasonStandings(leagueId)
      .subscribe(standings => this.leagueStandings = standings);
  }
}
