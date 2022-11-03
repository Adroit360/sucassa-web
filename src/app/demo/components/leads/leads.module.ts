import { LeadsComponent } from './leads.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';

@NgModule({
    declarations: [LeadsComponent],
    imports: [CommonModule, LeadsRoutingModule],
})
export class LeadsModule {}
