import {RaceStanding} from "@entities/race-standing";

export interface Standing {
  totalCount: number;
  rows: RaceStanding[];
}
