import { Competitors } from "../models/competitors";
import { Goals } from "../models/goals";
import { TeamResults } from "../models/team-results";

export interface ApiResponse {
    response: Response[];
}

interface Response {
    league: League;
    teams: Competitors;
    goals: Goals;
}

interface League {
    standings: TeamResults[][];
}