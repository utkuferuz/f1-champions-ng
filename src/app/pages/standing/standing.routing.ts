import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StandingListComponent} from "@app/pages/standing/list/standing-list.component";
import {StandingModule} from "@app/pages/standing/standing.module";

const raceRoutes: Routes = [
  { path: '', component: StandingListComponent, data: { title: 'Race List' } }
];
export const standingRouting: ModuleWithProviders<StandingModule> = RouterModule.forChild(raceRoutes);
