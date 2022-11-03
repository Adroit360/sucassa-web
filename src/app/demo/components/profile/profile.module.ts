import { AppLayoutModule } from './../../../layout/app.layout.module';
import { AppTopBarComponent } from './../../../layout/app.topbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, ProfileRoutingModule, AppLayoutModule],
})
export class ProfileModule {}
