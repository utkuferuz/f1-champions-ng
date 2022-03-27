import {RaceTime} from "@entities/race-time";
import {Speed} from "@entities/speed";

export interface Lap {
  rank: number;
  lap: number;
  Time: RaceTime;
  AverageSpeed: Speed;
}
