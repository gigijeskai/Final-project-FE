import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyPagesComponent } from './lazy-pages.component';

const routes: Routes = [{ path: '', component: LazyPagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyPagesRoutingModule { }
