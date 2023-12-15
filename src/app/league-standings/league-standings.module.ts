import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueStandingsComponent } from './league-standings.component';
import { CountrySelectComponent } from './country-select/country-select.component';
import { StandingsComponent } from './standings/standings.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LeagueStandingsComponent,
    CountrySelectComponent,
    StandingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LeagueStandingsModule { }
