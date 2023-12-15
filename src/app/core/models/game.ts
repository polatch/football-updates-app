import { Competitors } from "./competitors";
import { Goals } from "./goals";

export interface Game {
    teams: Competitors;
    goals: Goals;
}
