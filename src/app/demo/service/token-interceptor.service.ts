import {
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const user: any = JSON.parse(
            localStorage.getItem('currentUser') || '{}'
        );

        if (user) {
            req = req.clone({
                setHeaders: {
                    Authorization: `${user.token}`,
                },
            });
        }
        return next.handle(req);
    }
}
