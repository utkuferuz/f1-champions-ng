import {Driver} from "@entities/driver";
import {Constructor} from "@entities/constructor";

export interface DriverStanding {
  position: number;
  positionText: number;
  points: number;
  wins: number;
  Driver: Driver;
  Constructors: Constructor[]
}
