import {TestBed} from "@angular/core/testing";
import {StandingService} from "@services/standing/standing.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RaceService} from "@services/race/race.service";
import {expectedRaceTableHttpResponse, expectedRaceTableTransformedResponse} from "@services/race/race.mock";

describe('RaceService', () => {
  let httpMock: HttpTestingController;
  let service: RaceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StandingService]
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRaceResultsByYear() should exist', () => {
    expect(service.getRaceResultsByYear(2007)).toBeTruthy();
  });

  it('getRaceResultsByYear() should return data', () => {
    service.getRaceResultsByYear(2007).subscribe((results) => {
      expect(results).toEqual(expectedRaceTableTransformedResponse);
    });
    const request = httpMock.expectOne('http://ergast.com/api/f1/2007/results/1.json');
    expect(request.request.method).toBe('GET');
    request.flush(expectedRaceTableHttpResponse);
  });

});
