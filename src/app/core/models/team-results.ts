import { Team } from "./team";

export interface TeamResults {
    rank: number;
    team: Team;
    all: Result;
    goalsDiff: number;
    points: number;
}

interface Result {
    played: number;
    win: number;
    lose: number;
    draw: number;
}
