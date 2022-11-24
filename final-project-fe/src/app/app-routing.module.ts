import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementPage } from './pages/add-announcement/add-announcement.page';
import { AnnouncementPage } from './pages/announcement/announcement.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'annunci',
    component: AnnouncementPage,
  },
  {
    path: 'pubblica-annuncio',
    component: AddAnnouncementPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
