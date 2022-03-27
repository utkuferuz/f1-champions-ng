import {NgModule} from "@angular/core";
import {AppMaterialModule} from "@app/app.material.module";
import {AppCoreModule} from "@app/app.core.module";
import {AppComponentsModule} from "@app/shared/components/app.components.module";

@NgModule({
  imports: [
    AppCoreModule,
    AppMaterialModule,
    AppComponentsModule
  ],
  exports: [
    AppCoreModule,
    AppMaterialModule,
    AppComponentsModule
  ]
})
export class AppSharedModule {}
