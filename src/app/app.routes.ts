import { Routes } from '@angular/router';
import {LandingPageComponent} from './presentations/pages/landing-page/landing-page.component';

export const routes: Routes = [
  {path: "home", component: LandingPageComponent},
  {pathMatch: "full", redirectTo:"/home", path: ""}
];
