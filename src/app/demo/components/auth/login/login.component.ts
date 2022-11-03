import { Router } from '@angular/router';
import { LoginService } from './../../../service/login/login.service';
import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    password!: string;
    email!: string;
    loading = false;

    constructor(
        public layoutService: LayoutService,
        private authService: LoginService,
        private router: Router
    ) {}

    onLogin(email: string, password: string) {
        this.loading = true;

        this.authService.login(email, password).subscribe((res: any) => {
            this.loading = false;
            this.router.navigate(['/']);
        });
    }
}
