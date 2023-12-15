import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueStandingsModule } from './league-standings/league-standings.module';
import { TeamGamesModule } from './team-games/team-games.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LeagueStandingsModule,
    TeamGamesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
