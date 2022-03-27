import {Circuit} from "@entities/circuit";
import {RaceResult} from "@entities/race-result";

export interface Race {
  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: Circuit,
  date: string;
  time: string;
  Results: RaceResult[]
}
