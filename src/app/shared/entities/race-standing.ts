import {DriverStanding} from "@entities/driver-standing";
import {Race} from "@entities/race";

export interface RaceStanding {
  season: number;
  round: number;
  DriverStandings: DriverStanding[]
  Races?: Race[]
}
