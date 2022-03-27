import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-standing-list',
  templateUrl: 'standing-list.component.html',
  styleUrls: ['standing-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingListComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
