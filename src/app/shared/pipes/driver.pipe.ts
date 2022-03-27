import { Pipe, PipeTransform } from '@angular/core';
import {Driver} from "@entities/driver";
import {RaceStanding} from "@entities/race-standing";
import {Race} from "@entities/race";

@Pipe({
  name: 'driver'
})
export class DriverPipe implements PipeTransform {

  transform(driver: Driver) {
    return `${driver.givenName} ${driver.familyName}`;
  }

}
