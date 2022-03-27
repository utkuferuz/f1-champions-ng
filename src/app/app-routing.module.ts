import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/* Added children route for the feature module 'StandingModule' for lazy loading */
const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/standing/standing.module').then(m => m.StandingModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
