import { Component, OnInit } from '@angular/core';
import { Game } from '../core/models/game';
import { ActivatedRoute, Router } from '@angular/router';
import { FixturesService } from '../core/services/fixtures.service';

@Component({
  selector: 'team-games',
  templateUrl: './team-games.component.html'
})
export class TeamGamesComponent implements OnInit {
  tenLastGames: Game[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private fixturesService: FixturesService) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.params['teamId']
    this.fixturesService
      .getTenLastGames(teamId)
      .subscribe(games => this.tenLastGames = games)
  }

  navigateBack() {
    this.router.navigate(["/"]);
  }
}
