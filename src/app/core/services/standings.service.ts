import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandingsResponse } from './standings-response';
import { of } from 'rxjs';
import { TeamResults } from '../models/team-results';
import { Team } from '../models/team';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {
  API_URL = 'https://v3.football.api-sports.io/standings'
  HEADERS = new HttpHeaders({
    'x-rapidapi-key': 'b9a7b6240f3571aa4d887aac082af748',
  });

  constructor(private http: HttpClient) { }

  getActualSeasonStandings(leagueId: number) {
    return of({
      "response": [
          {
              "league": {
                  "standings": [
                      [
                          {
                              "rank": 1,
                              "team": {
                                  "name": "Paris Saint Germain",
                                  "logo": "https://media-4.api-sports.io/football/teams/85.png"
                              },
                              "points": 36,
                              "goalsDiff": 26,
                              "all": {
                                  "played": 15,
                                  "win": 11,
                                  "draw": 3,
                                  "lose": 1,
                              }
                          },
                          {
                              "rank": 2,
                              "team": {
                                  "id": 84,
                                  "name": "Nice",
                                  "logo": "https://media-4.api-sports.io/football/teams/84.png"
                              },
                              "points": 32,
                              "goalsDiff": 10,
                              "group": "Ligue 1",
                              "form": "WLWDW",
                              "status": "same",
                              "description": "Promotion - Champions League (Group Stage: )",
                              "all": {
                                  "played": 15,
                                  "win": 9,
                                  "draw": 5,
                                  "lose": 1,
                                  "goals": {
                                      "for": 16,
                                      "against": 6
                                  }
                              },
                              "home": {
                                  "played": 8,
                                  "win": 5,
                                  "draw": 3,
                                  "lose": 0,
                                  "goals": {
                                      "for": 9,
                                      "against": 2
                                  }
                              },
                              "away": {
                                  "played": 7,
                                  "win": 4,
                                  "draw": 2,
                                  "lose": 1,
                                  "goals": {
                                      "for": 7,
                                      "against": 4
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 3,
                              "team": {
                                  "id": 91,
                                  "name": "Monaco",
                                  "logo": "https://media-4.api-sports.io/football/teams/91.png"
                              },
                              "points": 30,
                              "goalsDiff": 11,
                              "group": "Ligue 1",
                              "form": "WWLDW",
                              "status": "same",
                              "description": "Promotion - Champions League (Group Stage: )",
                              "all": {
                                  "played": 15,
                                  "win": 9,
                                  "draw": 3,
                                  "lose": 3,
                                  "goals": {
                                      "for": 31,
                                      "against": 20
                                  }
                              },
                              "home": {
                                  "played": 7,
                                  "win": 6,
                                  "draw": 0,
                                  "lose": 1,
                                  "goals": {
                                      "for": 15,
                                      "against": 4
                                  }
                              },
                              "away": {
                                  "played": 8,
                                  "win": 3,
                                  "draw": 3,
                                  "lose": 2,
                                  "goals": {
                                      "for": 16,
                                      "against": 16
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 4,
                              "team": {
                                  "id": 79,
                                  "name": "Lille",
                                  "logo": "https://media-4.api-sports.io/football/teams/79.png"
                              },
                              "points": 27,
                              "goalsDiff": 8,
                              "group": "Ligue 1",
                              "form": "DWWDD",
                              "status": "same",
                              "description": "Promotion - Champions League (Qualification: )",
                              "all": {
                                  "played": 15,
                                  "win": 7,
                                  "draw": 6,
                                  "lose": 2,
                                  "goals": {
                                      "for": 19,
                                      "against": 11
                                  }
                              },
                              "home": {
                                  "played": 7,
                                  "win": 5,
                                  "draw": 1,
                                  "lose": 1,
                                  "goals": {
                                      "for": 10,
                                      "against": 3
                                  }
                              },
                              "away": {
                                  "played": 8,
                                  "win": 2,
                                  "draw": 5,
                                  "lose": 1,
                                  "goals": {
                                      "for": 9,
                                      "against": 8
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 5,
                              "team": {
                                  "id": 106,
                                  "name": "Stade Brestois 29",
                                  "logo": "https://media-4.api-sports.io/football/teams/106.png"
                              },
                              "points": 25,
                              "goalsDiff": 4,
                              "group": "Ligue 1",
                              "form": "WDWWL",
                              "status": "same",
                              "description": "Promotion - Europa League (Group Stage: )",
                              "all": {
                                  "played": 15,
                                  "win": 7,
                                  "draw": 4,
                                  "lose": 4,
                                  "goals": {
                                      "for": 19,
                                      "against": 15
                                  }
                              },
                              "home": {
                                  "played": 7,
                                  "win": 3,
                                  "draw": 3,
                                  "lose": 1,
                                  "goals": {
                                      "for": 11,
                                      "against": 7
                                  }
                              },
                              "away": {
                                  "played": 8,
                                  "win": 4,
                                  "draw": 1,
                                  "lose": 3,
                                  "goals": {
                                      "for": 8,
                                      "against": 8
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 6,
                              "team": {
                                  "id": 81,
                                  "name": "Marseille",
                                  "logo": "https://media-4.api-sports.io/football/teams/81.png"
                              },
                              "points": 23,
                              "goalsDiff": 6,
                              "group": "Ligue 1",
                              "form": "WWWDL",
                              "status": "same",
                              "description": "Promotion - Europa Conference League (Qualification: )",
                              "all": {
                                  "played": 15,
                                  "win": 6,
                                  "draw": 5,
                                  "lose": 4,
                                  "goals": {
                                      "for": 22,
                                      "against": 16
                                  }
                              },
                              "home": {
                                  "played": 7,
                                  "win": 5,
                                  "draw": 2,
                                  "lose": 0,
                                  "goals": {
                                      "for": 12,
                                      "against": 1
                                  }
                              },
                              "away": {
                                  "played": 8,
                                  "win": 1,
                                  "draw": 3,
                                  "lose": 4,
                                  "goals": {
                                      "for": 10,
                                      "against": 15
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 7,
                              "team": {
                                  "id": 116,
                                  "name": "Lens",
                                  "logo": "https://media-4.api-sports.io/football/teams/116.png"
                              },
                              "points": 23,
                              "goalsDiff": 4,
                              "group": "Ligue 1",
                              "form": "DWWWD",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 6,
                                  "draw": 5,
                                  "lose": 4,
                                  "goals": {
                                      "for": 19,
                                      "against": 15
                                  }
                              },
                              "home": {
                                  "played": 7,
                                  "win": 4,
                                  "draw": 2,
                                  "lose": 1,
                                  "goals": {
                                      "for": 12,
                                      "against": 6
                                  }
                              },
                              "away": {
                                  "played": 8,
                                  "win": 2,
                                  "draw": 3,
                                  "lose": 3,
                                  "goals": {
                                      "for": 7,
                                      "against": 9
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 8,
                              "team": {
                                  "id": 93,
                                  "name": "Reims",
                                  "logo": "https://media-4.api-sports.io/football/teams/93.png"
                              },
                              "points": 23,
                              "goalsDiff": 0,
                              "group": "Ligue 1",
                              "form": "LWLLW",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 7,
                                  "draw": 2,
                                  "lose": 6,
                                  "goals": {
                                      "for": 21,
                                      "against": 21
                                  }
                              },
                              "home": {
                                  "played": 7,
                                  "win": 4,
                                  "draw": 0,
                                  "lose": 3,
                                  "goals": {
                                      "for": 9,
                                      "against": 9
                                  }
                              },
                              "away": {
                                  "played": 8,
                                  "win": 3,
                                  "draw": 2,
                                  "lose": 3,
                                  "goals": {
                                      "for": 12,
                                      "against": 12
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 9,
                              "team": {
                                  "id": 83,
                                  "name": "Nantes",
                                  "logo": "https://media-4.api-sports.io/football/teams/83.png"
                              },
                              "points": 18,
                              "goalsDiff": -6,
                              "group": "Ligue 1",
                              "form": "LWDLL",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 5,
                                  "draw": 3,
                                  "lose": 7,
                                  "goals": {
                                      "for": 19,
                                      "against": 25
                                  }
                              },
                              "home": {
                                  "played": 8,
                                  "win": 3,
                                  "draw": 3,
                                  "lose": 2,
                                  "goals": {
                                      "for": 13,
                                      "against": 10
                                  }
                              },
                              "away": {
                                  "played": 7,
                                  "win": 2,
                                  "draw": 0,
                                  "lose": 5,
                                  "goals": {
                                      "for": 6,
                                      "against": 15
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 10,
                              "team": {
                                  "id": 95,
                                  "name": "Strasbourg",
                                  "logo": "https://media-4.api-sports.io/football/teams/95.png"
                              },
                              "points": 17,
                              "goalsDiff": -6,
                              "group": "Ligue 1",
                              "form": "WDLDD",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 4,
                                  "draw": 5,
                                  "lose": 6,
                                  "goals": {
                                      "for": 14,
                                      "against": 20
                                  }
                              },
                              "home": {
                                  "played": 8,
                                  "win": 3,
                                  "draw": 3,
                                  "lose": 2,
                                  "goals": {
                                      "for": 10,
                                      "against": 8
                                  }
                              },
                              "away": {
                                  "played": 7,
                                  "win": 1,
                                  "draw": 2,
                                  "lose": 4,
                                  "goals": {
                                      "for": 4,
                                      "against": 12
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 11,
                              "team": {
                                  "id": 111,
                                  "name": "LE Havre",
                                  "logo": "https://media-4.api-sports.io/football/teams/111.png"
                              },
                              "points": 16,
                              "goalsDiff": -4,
                              "group": "Ligue 1",
                              "form": "LLDDW",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 3,
                                  "draw": 7,
                                  "lose": 5,
                                  "goals": {
                                      "for": 13,
                                      "against": 17
                                  }
                              },
                              "home": {
                                  "played": 7,
                                  "win": 2,
                                  "draw": 2,
                                  "lose": 3,
                                  "goals": {
                                      "for": 6,
                                      "against": 7
                                  }
                              },
                              "away": {
                                  "played": 8,
                                  "win": 1,
                                  "draw": 5,
                                  "lose": 2,
                                  "goals": {
                                      "for": 7,
                                      "against": 10
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 12,
                              "team": {
                                  "id": 112,
                                  "name": "Metz",
                                  "logo": "https://media-4.api-sports.io/football/teams/112.png"
                              },
                              "points": 16,
                              "goalsDiff": -8,
                              "group": "Ligue 1",
                              "form": "LLWWD",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 4,
                                  "draw": 4,
                                  "lose": 7,
                                  "goals": {
                                      "for": 15,
                                      "against": 23
                                  }
                              },
                              "home": {
                                  "played": 7,
                                  "win": 1,
                                  "draw": 3,
                                  "lose": 3,
                                  "goals": {
                                      "for": 7,
                                      "against": 8
                                  }
                              },
                              "away": {
                                  "played": 8,
                                  "win": 3,
                                  "draw": 1,
                                  "lose": 4,
                                  "goals": {
                                      "for": 8,
                                      "against": 15
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 13,
                              "team": {
                                  "id": 94,
                                  "name": "Rennes",
                                  "logo": "https://media-4.api-sports.io/football/teams/94.png"
                              },
                              "points": 15,
                              "goalsDiff": -1,
                              "group": "Ligue 1",
                              "form": "LLWLL",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 3,
                                  "draw": 6,
                                  "lose": 6,
                                  "goals": {
                                      "for": 20,
                                      "against": 21
                                  }
                              },
                              "home": {
                                  "played": 9,
                                  "win": 3,
                                  "draw": 3,
                                  "lose": 3,
                                  "goals": {
                                      "for": 18,
                                      "against": 14
                                  }
                              },
                              "away": {
                                  "played": 6,
                                  "win": 0,
                                  "draw": 3,
                                  "lose": 3,
                                  "goals": {
                                      "for": 2,
                                      "against": 7
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 14,
                              "team": {
                                  "id": 82,
                                  "name": "Montpellier",
                                  "logo": "https://media-4.api-sports.io/football/teams/82.png"
                              },
                              "points": 14,
                              "goalsDiff": -3,
                              "group": "Ligue 1",
                              "form": "DLDLD",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 3,
                                  "draw": 6,
                                  "lose": 6,
                                  "goals": {
                                      "for": 17,
                                      "against": 20
                                  }
                              },
                              "home": {
                                  "played": 8,
                                  "win": 1,
                                  "draw": 5,
                                  "lose": 2,
                                  "goals": {
                                      "for": 8,
                                      "against": 9
                                  }
                              },
                              "away": {
                                  "played": 7,
                                  "win": 2,
                                  "draw": 1,
                                  "lose": 4,
                                  "goals": {
                                      "for": 9,
                                      "against": 11
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 15,
                              "team": {
                                  "id": 96,
                                  "name": "Toulouse",
                                  "logo": "https://media-4.api-sports.io/football/teams/96.png"
                              },
                              "points": 13,
                              "goalsDiff": -7,
                              "group": "Ligue 1",
                              "form": "LDLDL",
                              "status": "same",
                              "description": null,
                              "all": {
                                  "played": 15,
                                  "win": 2,
                                  "draw": 7,
                                  "lose": 6,
                                  "goals": {
                                      "for": 14,
                                      "against": 21
                                  }
                              },
                              "home": {
                                  "played": 6,
                                  "win": 1,
                                  "draw": 4,
                                  "lose": 1,
                                  "goals": {
                                      "for": 9,
                                      "against": 7
                                  }
                              },
                              "away": {
                                  "played": 9,
                                  "win": 1,
                                  "draw": 3,
                                  "lose": 5,
                                  "goals": {
                                      "for": 5,
                                      "against": 14
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 16,
                              "team": {
                                  "id": 97,
                                  "name": "Lorient",
                                  "logo": "https://media-4.api-sports.io/football/teams/97.png"
                              },
                              "points": 12,
                              "goalsDiff": -9,
                              "group": "Ligue 1",
                              "form": "LDLLD",
                              "status": "same",
                              "description": "Ligue 1 (Promotion - Play Offs: )",
                              "all": {
                                  "played": 15,
                                  "win": 2,
                                  "draw": 6,
                                  "lose": 7,
                                  "goals": {
                                      "for": 20,
                                      "against": 29
                                  }
                              },
                              "home": {
                                  "played": 8,
                                  "win": 2,
                                  "draw": 3,
                                  "lose": 3,
                                  "goals": {
                                      "for": 13,
                                      "against": 15
                                  }
                              },
                              "away": {
                                  "played": 7,
                                  "win": 0,
                                  "draw": 3,
                                  "lose": 4,
                                  "goals": {
                                      "for": 7,
                                      "against": 14
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 17,
                              "team": {
                                  "id": 99,
                                  "name": "Clermont Foot",
                                  "logo": "https://media-4.api-sports.io/football/teams/99.png"
                              },
                              "points": 11,
                              "goalsDiff": -12,
                              "group": "Ligue 1",
                              "form": "DLDLW",
                              "status": "same",
                              "description": "Relegation - Ligue 2",
                              "all": {
                                  "played": 15,
                                  "win": 2,
                                  "draw": 5,
                                  "lose": 8,
                                  "goals": {
                                      "for": 9,
                                      "against": 21
                                  }
                              },
                              "home": {
                                  "played": 8,
                                  "win": 1,
                                  "draw": 2,
                                  "lose": 5,
                                  "goals": {
                                      "for": 3,
                                      "against": 10
                                  }
                              },
                              "away": {
                                  "played": 7,
                                  "win": 1,
                                  "draw": 3,
                                  "lose": 3,
                                  "goals": {
                                      "for": 6,
                                      "against": 11
                                  }
                              },
                              "update": "2023-12-15T00:00:00+00:00"
                          },
                          {
                              "rank": 18,
                              "team": {
                                  "id": 80,
                                  "name": "Lyon",
                                  "logo": "https://media-4.api-sports.io/football/teams/80.png"
                              },
                              "points": 10,
                              "goalsDiff": -13,
                              "group": "Ligue 1",
                              "form": "WLLLW",
                              "status": "same",
                              "description": "Relegation - Ligue 2",
                              "all": {
                                  "played": 15,
                                  "win": 2,
                                  "draw": 4,
                                  "lose": 9,
                                  "goals": {
                                      "for": 14,
                                      "against": 27
                                  }
                              },
                              "home": {
                                  "played": 8,
                                  "win": 1,
                                  "draw": 3,
                                  "lose": 4,
                                  "goals": {
                                      "for": 10,
                                      "against": 16
                                  }
                              },
                              "away": {
                                  "played": 7,
                                  "win": 1,
                                  "draw": 1,
                                  "lose": 5,
                                  "goals": {
                                      "for": 4,
                                      "against": 11
                                  }
                              }
                          }
                      ]
                  ]
              }
          }
      ]
  })
    // const params = new HttpParams().set('season', new Date().getFullYear()).set('league', leagueId);
    // const options = { headers: this.HEADERS, params: params };
    
    // return this.http.get<StandingsResponse>(this.API_URL, options);
  }
}
