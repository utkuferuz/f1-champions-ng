import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {StandingTableComponent} from "@app/shared/components/standing-table/standing-table.component";
import {StandingService} from "@services/standing/standing.service";
import {RaceService} from "@services/race/race.service";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {DriverPipe} from "@app/shared/pipes/driver.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {expectedTransformedStandingResponse} from "@services/standing/standing.mock";

describe('StandingTableComponent', () => {
  let component: StandingTableComponent;
  let fixture: ComponentFixture<StandingTableComponent>;
  const mockStandingService = jasmine.createSpyObj("StandingService", ["getByQuery"]);
  const mockRaceService = jasmine.createSpyObj("RaceService", ["getRaceResultsByYear"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandingTableComponent, DriverPipe],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
        MatTableModule
      ],
      providers: [
        { provide: StandingService, useValue: mockStandingService },
        { provide: RaceService, useValue: mockRaceService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingTableComponent);
    // component.startYear = 2005;
    component = fixture.componentInstance;
    mockStandingService.getByQuery.and.returnValue(of(expectedTransformedStandingResponse));
    // mockRaceService.getRaceResultsByYear.and.returnValue(of([expectedRaceTableTransformedResponse]));
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render standing table', () => {
    const tableElement = fixture.debugElement.query(By.css('table'));
    expect(tableElement).toBeTruthy();
  });

  it('should show the columns we expect', () => {
    fixture.detectChanges();
    const tableElement = document.querySelector('table');
    const tableHeaders = Array.from(tableElement.getElementsByClassName('mat-header-cell'));
    const headerClasses = [
      'mat-column-detail',
      'mat-column-season',
      'mat-column-driverStandings',
      'mat-column-code',
      'mat-column-constructor',
      'mat-column-nationality',
      'mat-column-points',
      'mat-column-wins',
      'mat-column-round'
    ];
    tableHeaders.forEach(header => {
      expect(headerClasses.some(item => header.classList.contains(item))).toBeTruthy();
    });
  });

  it('should show standing data rows', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable()
      .then(() => {
        const standingTable = document.querySelector('table');
        const rows = Array.from(standingTable.getElementsByClassName('row-main'));
        const seasons: number[] = [];
        rows.forEach(row => {
          let season: string = row.getElementsByClassName('mat-column-season').item(0).textContent;
          seasons.push(parseInt(season));
        });
        expect(expectedTransformedStandingResponse.rows.some(s => seasons.includes(s.season))).toBeTruthy();
    });
  }));

});

