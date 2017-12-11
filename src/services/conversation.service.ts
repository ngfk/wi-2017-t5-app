import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { share } from 'rxjs/operators/share';

import { ChatEntry, ChatEntryText, ChatType } from '../models/chat';
import { EnvService } from './env.service';
import { StoreService } from './store.service';

type ConversationMessage = { text: string[] };

@Injectable()
export class ConversationService {
    private readonly endpoint: string;

    constructor(
        private http: HttpClient,
        private env: EnvService,
        private store: StoreService
    ) {
        this.endpoint = this.env.backend + '/api/conversation';
    }

    public message(entry?: ChatEntryText): Observable<ChatEntry> {
        const uri = this.endpoint + '/message';

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${this.store.getState().auth}`);

        const params = { text: entry && entry.text };

        const request$ = this.http
            .post<ConversationMessage>(uri, params, { headers })
            .pipe(share());

        return request$.pipe(mergeMap(arr => this.toChatEntry(arr.text)));
    }

    private toChatEntry(response: string[]): Observable<ChatEntry> {
        return from(response).pipe(
            map(text => {
                const entry: ChatEntryText = {
                    type: ChatType.Text,
                    timestamp: new Date(),
                    from: 'Watson',
                    text
                };

                return entry;
            })
        );
    }
}
