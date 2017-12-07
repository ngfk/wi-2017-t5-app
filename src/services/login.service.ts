import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators/share';

import { EnvService } from './env.service';

@Injectable()
export class LoginService {
    private readonly endpoint: string;
    private _token: string;

    constructor(private http: HttpClient, private env: EnvService) {
        this.endpoint = this.env.backend + '/api/login';
    }

    public async initialize(): Promise<void> {
        if (this.load()) return;

        const token = await this.login().toPromise();
        this.store(token);
    }

    public login(): Observable<string> {
        const headers = new HttpHeaders().set('Accept', 'plain/text');

        return this.http
            .post(
                this.endpoint,
                { deviceId: this.env.deviceId },
                { headers, responseType: 'text' }
            )
            .pipe(share());
    }

    public getToken(): string {
        return this._token;
    }

    private load(): boolean {
        const token = window.localStorage.getItem('token');
        if (!token) return false;

        this._token = token;
        return true;
    }

    private store(token: string): void {
        window.localStorage.setItem('token', token);
    }
}
