import {TestBed} from "@angular/core/testing";
import {StandingService} from "@services/standing/standing.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {expectedStandingHttpResponse, expectedTransformedStandingResponse} from "@services/standing/standing.mock";

describe('StandingService', () => {
  let httpMock: HttpTestingController;
  let service: StandingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StandingService]
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getByQuery() should exist', () => {
    expect(service.getByQuery()).toBeTruthy();
  });

  it('getByQuery() should return data', () => {
    service.getByQuery().subscribe((standing) => {
      expect(standing).toEqual(expectedTransformedStandingResponse);
    });
    const request = httpMock.expectOne('http://ergast.com/api/f1/driverStandings/1.json');
    expect(request.request.method).toBe('GET');
    request.flush(expectedStandingHttpResponse);
  });

});
