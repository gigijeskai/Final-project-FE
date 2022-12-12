import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPage } from './auth/login/login.page';
import { RegisterPage } from './auth/register/register.page';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddAnnouncementPage } from './pages/add-announcement/add-announcement.page';
import { AnnouncementPage } from './pages/announcement/announcement.page';
import { HomePage } from './pages/home/home.page';
import { UsedPage } from './pages/used/used.page';

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
    path: 'post-announcement',
    component: AddAnnouncementPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'used',
    component: UsedPage,
  },
  {
    path: 'lazy-pages',
    loadChildren: () =>
      import('./lazy-pages/lazy-pages/lazy-pages.module').then(
        (m) => m.LazyPagesModule
      ),
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: RegisterPage,
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
