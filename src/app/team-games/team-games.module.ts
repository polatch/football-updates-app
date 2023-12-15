import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamGamesComponent } from './team-games.component';
import { GamesComponent } from './games/games.component';



@NgModule({
  declarations: [
    TeamGamesComponent,
    GamesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamGamesModule { }
