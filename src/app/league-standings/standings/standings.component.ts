import { Component, Input } from '@angular/core';
import { TeamResults } from 'src/app/core/models/team-results';

@Component({
  selector: 'standings',
  templateUrl: './standings.component.html'
})
export class StandingsComponent {
  @Input() standings: TeamResults[] = [];
}
