import {AppSharedModule} from "@app/app.shared.module";
import {standingRouting} from "@app/pages/standing/standing.routing";
import {StandingListComponent} from "@app/pages/standing/list/standing-list.component";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    AppSharedModule,
    standingRouting,
  ],
  declarations: [
    StandingListComponent
  ],
  exports: [
    StandingListComponent
  ]
})
export class StandingModule { }
