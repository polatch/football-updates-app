import { Component, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'games',
  templateUrl: './games.component.html'
})
export class GamesComponent {
  @Input() games: Game[] = [];
}
