import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { ApiResponse } from './api-response';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {
  API_URL = 'https://v3.football.api-sports.io/fixtures'
  HEADERS = new HttpHeaders({
    'x-rapidapi-key': 'b9a7b6240f3571aa4d887aac082af748',
  });

  constructor(private http: HttpClient) { }

  getTenLastGames(teamId: number) {
    const params = new HttpParams().set('last', 10).set('team', teamId);
    const options = { headers: this.HEADERS, params: params };
    
    return this.http.get<ApiResponse>(this.API_URL, options).pipe(map((response) => this.responseToGames(response)))
  }

  private responseToGames(response: ApiResponse): Game[] {
    return response.response.map((fixtures) => {
      return {teams: fixtures.teams, goals: fixtures.goals}
    });
  }
}
