import {Race} from "@entities/race";

export const expectedRaceTableHttpResponse: any = {
  MRData: {
    xmlns: "http://ergast.com/mrd/1.5",
    series: "f1",
    url: "http://ergast.com/api/f1/2005.json",
    limit: "30",
    offset: "0",
    total: "19",
    RaceTable: {
      season: "2005",
      Races: [
        {
          season: "2005",
          round: "1",
          url: "http://en.wikipedia.org/wiki/2005_Australian_Grand_Prix",
          raceName: "Australian Grand Prix",
          Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
              lat: "-37.8497",
              long: "144.968",
              locality: "Melbourne",
              country: "Australia"
            }
          },
          date: "2005-03-06",
          time: "14:00:00Z"
        }
      ]
    }
  }
}

export const expectedRaceTableTransformedResponse: Race[] = [
  ...expectedRaceTableHttpResponse.MRData.RaceTable.Races
];
