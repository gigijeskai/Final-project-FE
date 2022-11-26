import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DettagliAutoNoleggioComponent } from './dettagli-auto-noleggio/dettagli-auto-noleggio.component';
import { DettagliAutoVenditaComponent } from './dettagli-auto-vendita/dettagli-auto-vendita.component';

@NgModule({
  declarations: [DettagliAutoNoleggioComponent, DettagliAutoVenditaComponent],
  imports: [CommonModule],
  exports: [DettagliAutoNoleggioComponent, DettagliAutoVenditaComponent],
})
export class ModalModule {}
