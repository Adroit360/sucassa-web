import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http
            .post<any>(` https://sucasa-api.herokuapp.com/api/login`, {
                email,
                password,
            })
            .pipe(
                map((user: any) => {
                    localStorage.setItem(
                        'currentUser',
                        JSON.stringify({ user: user.user, token: user.token })
                    );
                    return user;
                })
            );
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
