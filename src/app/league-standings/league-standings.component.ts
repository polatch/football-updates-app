import { Component, OnInit } from '@angular/core';
import { TeamResults } from '../core/models/team-results';
import { TopLeagueId } from '../core/enums/top-league-id';
import { StandingsService } from '../core/services/standings.service';

@Component({
  templateUrl: './league-standings.component.html'
})
export class LeagueStandingsComponent implements OnInit {
  countries: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  leagueStandings: TeamResults[] = [];

  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    this.leagueStandings = this.standingsService.getLastStandings();
  }

  getTopLeagueStandings(country: string) {
    const leagueId = TopLeagueId[country as keyof typeof TopLeagueId];
    this.standingsService
      .getActualSeasonStandings(leagueId)
      .subscribe(standings => this.leagueStandings = standings);
  }
}
