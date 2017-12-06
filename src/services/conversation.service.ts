import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { share } from 'rxjs/operators/share';
import { tap } from 'rxjs/operators/tap';

import { ChatEntry, ChatEntryText, ChatType } from '../models/chat';

type ConversationMessage = { context: any; text: string[] };

@Injectable()
export class ConversationService {
    private readonly endpoint = 'https://wi-2017-t5.eu-gb.mybluemix.net/api/conversation';
    private context: any;

    constructor(private http: HttpClient) {}

    public message(entry?: ChatEntryText): Observable<ChatEntry> {
        const uri = this.endpoint + '/message';

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        const params = {
            input: { text: entry && entry.text },
            context: this.context
        };

        const request$ = this.http.post<ConversationMessage>(uri, params, {
            headers
        });

        return request$.pipe(
            share(),
            tap(arr => (this.context = arr.context)),
            mergeMap(arr => this.toChatEntry(arr.text))
        );
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
