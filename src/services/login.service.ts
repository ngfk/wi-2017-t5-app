import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators/share';

import { EnvService } from './env.service';

export interface LoginParams {
    name: string;
    post: string[];
    image: Blob[];
}

@Injectable()
export class LoginService {
    public token: string;
    private readonly endpoint: string;

    constructor(private http: HttpClient, private env: EnvService) {
        this.endpoint = this.env.backend + '/api/login';
    }

    public login(params: LoginParams): Observable<string> {
        const headers = new HttpHeaders().set('Accept', 'plain/text');

        const data = new FormData();
        data.append('name', params.name);
        data.append('deviceId', this.env.deviceId);

        params.post.forEach(p => data.append('post', p));
        params.image.forEach(i => data.append('image', i));

        const request$ = this.http
            .post(this.endpoint, data, { headers, responseType: 'text' })
            .pipe(share());

        request$.subscribe(token => (this.token = token));
        return request$;
    }
}
