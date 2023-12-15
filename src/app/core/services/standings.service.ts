import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiResponse } from './api-response';
import { TeamResults } from '../models/team-results';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {
  API_URL = 'https://v3.football.api-sports.io/standings'
  HEADERS = new HttpHeaders({
    'x-rapidapi-key': 'b9a7b6240f3571aa4d887aac082af748',
  });

  standings: TeamResults[] = [];

  constructor(private http: HttpClient) { }

  getLastStandings() {
    return this.standings;
  }

  getActualSeasonStandings(leagueId: number) {
    const params = new HttpParams().set('season', new Date().getFullYear()).set('league', leagueId);
    const options = { headers: this.HEADERS, params: params };
    
    return this.http.get<ApiResponse>(this.API_URL, options).pipe(map((response) => {
      this.standings = this.responseToStandings(response);
      return this.standings;
    }));
  }

  private responseToStandings(response: ApiResponse): TeamResults[] {
    return response.response[0].league.standings[0];
  }
}
