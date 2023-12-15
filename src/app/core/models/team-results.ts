import { Result } from "./result";
import { Team } from "./team";

export interface TeamResults {
    rank: number;
    team: Team;
    all: Result;
    goalsDiff: number;
    points: number;
}
