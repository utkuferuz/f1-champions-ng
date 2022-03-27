import {RaceStanding} from "@entities/race-standing";
import {Standing} from "@entities/standing";

export const expectedRaceStandings: RaceStanding[] = [
  {
    season: 2005,
    round: 19,
    DriverStandings: [
      {
        position: 1,
        positionText: 1,
        points: 133,
        wins: 7,
        Driver: {
          driverId: "alonso",
          permanentNumber: "14",
          code: "ALO",
          url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
          givenName: "Fernando",
          familyName: "Alonso",
          dateOfBirth: "1981-07-29",
          nationality: "Spanish"
        },
        Constructors: [
          {
            constructorId: "renault",
            url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
            name: "Renault",
            nationality: "French"
          }
        ]
      }
    ]
  },
  {
    season: 2006,
    round: 18,
    DriverStandings: [
      {
        position: 1,
        positionText: 1,
        points: 134,
        wins: 7,
        Driver: {
          driverId: "alonso",
          permanentNumber: "14",
          code: "ALO",
          url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
          givenName: "Fernando",
          familyName: "Alonso",
          dateOfBirth: "1981-07-29",
          nationality: "Spanish"
        },
        Constructors: [
          {
            constructorId: "renault",
            url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
            name: "Renault",
            nationality: "French"
          }
        ]
      }
    ]
  },
  {
    season: 2007,
    round: 17,
    DriverStandings: [
      {
        position: 1,
        positionText: 1,
        points: 110,
        wins: 6,
        Driver: {
          driverId: "raikkonen",
          permanentNumber: "7",
          code: "RAI",
          url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
          givenName: "Kimi",
          familyName: "Räikkönen",
          dateOfBirth: "1979-10-17",
          nationality: "Finnish"
        },
        Constructors: [
          {
            constructorId: "ferrari",
            url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
            name: "Ferrari",
            nationality: "Italian"
          }
        ]
      }
    ]
  },
  {
    season: 2008,
    round: 18,
    DriverStandings: [
      {
        position: 1,
        positionText: 1,
        points: 98,
        wins: 5,
        Driver: {
          driverId: "hamilton",
          permanentNumber: "44",
          code: "HAM",
          url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
          givenName: "Lewis",
          familyName: "Hamilton",
          dateOfBirth: "1985-01-07",
          nationality: "British"
        },
        Constructors: [
          {
            constructorId: "mclaren",
            url: "http://en.wikipedia.org/wiki/McLaren",
            name: "McLaren",
            nationality: "British"
          }
        ]
      }
    ]
  },
  {
    season: 2009,
    round: 17,
    DriverStandings: [
      {
        position: 1,
        positionText: 1,
        points: 95,
        wins: 6,
        Driver: {
          driverId: "button",
          permanentNumber: "22",
          code: "BUT",
          url: "http://en.wikipedia.org/wiki/Jenson_Button",
          givenName: "Jenson",
          familyName: "Button",
          dateOfBirth: "1980-01-19",
          nationality: "British"
        },
        Constructors: [
          {
            constructorId: "brawn",
            url: "http://en.wikipedia.org/wiki/Brawn_GP",
            name: "Brawn",
            nationality: "British"
          }
        ]
      }
    ]
  }
]

export const expectedTransformedStandingResponse: Standing = {
  totalCount: 17,
  rows: expectedRaceStandings
};

export const expectedStandingHttpResponse: any = {
  MRData: {
    xmlns: "http://ergast.com/mrd/1.5",
    series: "f1",
    url: "http://ergast.com/api/f1/driverstandings/1.json",
    limit: "5",
    offset: "55",
    total: "72",
    StandingsTable: {
      driverStandings: "1",
      StandingsLists: expectedRaceStandings
    }
  }
}
