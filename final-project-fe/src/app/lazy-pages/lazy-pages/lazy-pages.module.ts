import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyPagesRoutingModule } from './lazy-pages-routing.module';
import { LazyPagesComponent } from './lazy-pages.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LazyPagesComponent],
  imports: [CommonModule, LazyPagesRoutingModule, FormsModule],
})
export class LazyPagesModule {}
