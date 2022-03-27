import {Driver} from "@entities/driver";
import {Constructor} from "@entities/constructor";
import {RaceTime} from "@entities/race-time";
import {Lap} from "@entities/lap";

export interface RaceResult {
  number: number;
  position: number;
  positionText: number;
  points: number;
  Driver: Driver;
  Constructor: Constructor;
  grid: number;
  laps: number;
  status: string;
  Time: RaceTime;
  FastestLap: Lap;
}
