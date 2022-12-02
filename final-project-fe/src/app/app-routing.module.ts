import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddAnnouncementPage } from './pages/add-announcement/add-announcement.page';
import { AnnouncementPage } from './pages/announcement/announcement.page';
import { UsatoPage } from './pages/usato/usato.page';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'usato',
    component: UsatoPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
