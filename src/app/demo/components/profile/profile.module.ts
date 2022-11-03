import { CreateLeadComponent } from './leads/create-lead/create-lead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppLayoutModule } from './../../../layout/app.layout.module';
import { AppTopBarComponent } from './../../../layout/app.topbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [ProfileComponent, CreateLeadComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        AppLayoutModule,
        TabMenuModule,
        RippleModule,
        InputTextModule,
        DividerModule,
        PanelModule,
        BrowserModule,
        BrowserAnimationsModule,
        MenuModule,
        ButtonModule,
        ProgressSpinnerModule,
        AvatarModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        DropdownModule,
        InputNumberModule,
        InputTextareaModule,
    ],
})
export class ProfileModule {}
