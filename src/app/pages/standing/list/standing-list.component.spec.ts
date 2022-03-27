import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {StandingService} from "@services/standing/standing.service";
import {RaceService} from "@services/race/race.service";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";
import {expectedTransformedStandingResponse} from "@services/standing/standing.mock";
import {StandingListComponent} from "@app/pages/standing/list/standing-list.component";
import {StandingTableComponent} from "@app/shared/components/standing-table/standing-table.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('StandingListComponent', () => {
  let component: StandingListComponent;
  let fixture: ComponentFixture<StandingListComponent>;
  const mockStandingService = jasmine.createSpyObj("StandingService", ["getByQuery"]);
  const mockRaceService = jasmine.createSpyObj("RaceService", ["getRaceResultsByYear"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandingListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: StandingService, useValue: mockStandingService },
        { provide: RaceService, useValue: mockRaceService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingListComponent);
    component = fixture.componentInstance;
    // mockStandingService.getByQuery.and.returnValue(of([expectedTransformedStandingResponse]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-standing-table component', () => {
    const tableElement = fixture.debugElement.query(By.css('app-standing-table'));
    expect(tableElement).toBeTruthy();
  });

});
