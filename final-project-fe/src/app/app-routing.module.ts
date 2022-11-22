import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/login/login.page';
import { RegisterPage } from './auth/register/register.page';
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
    path: 'home',
    component: HomePage,
  },
  {
    path: 'announcement',
    component: AnnouncementPage,
  },
  {
    path: 'add-announcement',
    component: AddAnnouncementPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'sign-up',
    component: RegisterPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
