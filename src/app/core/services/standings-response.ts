import { TeamResults } from "../models/team-results";

export interface StandingsResponse {
    response: Rep[];
}

interface Rep {
    league: League;
}

interface League {
    standings: TeamResults[][];
}