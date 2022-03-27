import {NgModule} from "@angular/core";
import {AppCoreModule} from "@app/app.core.module";
import {AppMaterialModule} from "@app/app.material.module";
import {StandingTableComponent} from "@app/shared/components/standing-table/standing-table.component";
import {DriverPipe} from "@app/shared/pipes/driver.pipe";

@NgModule({
  declarations: [
    StandingTableComponent,
    DriverPipe
  ],
  imports: [
    AppCoreModule,
    AppMaterialModule,
  ],
  exports: [
    StandingTableComponent
  ],
  providers: [
    DriverPipe
  ]
})
export class AppComponentsModule {}
