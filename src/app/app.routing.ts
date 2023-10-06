import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export enum AppRoutes {
  HOME = 'home',
  TOURS_LIST = 'tours-list',
  TOUR_DETAILS = 'tour-details',
  DB_TOUR = 'db-tour',
  CONTACT = 'contact',
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.CONTACT,
  },

  { path: AppRoutes.CONTACT, component: ContactComponent },
  { path: '**', redirectTo: AppRoutes.HOME },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
