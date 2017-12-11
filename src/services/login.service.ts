import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators/share';

import { EnvService } from './env.service';
import { StoreService } from './store.service';

export interface LoginParams {
    name: string;
    post: string[];
    image: Blob[];
}

const TOKEN_KEY = 'wi-2017-t5-token';

@Injectable()
export class LoginService {
    private readonly endpoint: string;

    constructor(
        private http: HttpClient,
        private env: EnvService,
        private store: StoreService
    ) {
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

        request$.subscribe(token => {
            this.store.dispatch('AUTH_SET_TOKEN', token);
        });

        return request$;
    }
}
