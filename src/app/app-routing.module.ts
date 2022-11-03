import { AuthGuard } from './demo/gurads/auth.guard';
import { LeadsComponent } from './demo/components/leads/leads.component';
import { ProfileComponent } from './demo/components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { CreateLeadComponent } from './demo/components/profile/leads/create-lead/create-lead.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    canActivate: [AuthGuard],
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './demo/components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'leads',
                            loadChildren: () =>
                                import(
                                    './demo/components/leads/leads.module'
                                ).then((m) => m.LeadsModule),
                        },
                        {
                            path: 'contacts',
                            loadChildren: () =>
                                import(
                                    './demo/components/contacts/contacts.module'
                                ).then((m) => m.ContactsModule),
                        },
                        {
                            path: 'accounts',
                            loadChildren: () =>
                                import(
                                    './demo/components/accounts/accounts.module'
                                ).then((m) => m.AccountsModule),
                        },
                    ],
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./demo/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
                {
                    path: 'landing',
                    loadChildren: () =>
                        import('./demo/components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                {
                    path: 'profile/:id',
                    component: ProfileComponent,
                    canActivate: [AuthGuard],
                },
                {
                    path: 'add-lead/:id',
                    component: CreateLeadComponent,
                    canActivate: [AuthGuard],
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
