import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from './register/register.page';
import { AnnouncementPage } from '../pages/announcement/announcement.page';
import { AddAnnouncementPage } from '../pages/add-announcement/add-announcement.page';
import { ServiceModule } from '../services/service.module';

const routes: Routes = [
  {
    path: 'accedi',
    component: LoginPage,
  },
  {
    path: 'registrati',
    component: RegisterPage,
  },
];

@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
})
export class AuthModule {}
