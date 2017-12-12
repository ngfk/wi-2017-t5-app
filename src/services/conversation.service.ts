import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { empty as ObservableEmpty } from 'rxjs/observable/empty';
import { from as ObservableFrom } from 'rxjs/observable/from';
import { of as ObservableOf } from 'rxjs/observable/of';
import { timer as ObservableTimer } from 'rxjs/observable/timer';
import { concat } from 'rxjs/operators/concat';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { share } from 'rxjs/operators/share';
import { zip } from 'rxjs/operators/zip';

import {
    ChatEntry,
    ChatEntryImage,
    ChatEntryText,
    ChatType
} from '../models/chat';
import { EnvService } from './env.service';
import { StoreService } from './store.service';

type ConversationMessage = {
    text: string[];
    location?: [number, number];
    profile?: any;
};

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

        return request$.pipe(mergeMap(message => this.toChatEntries(message)));
    }

    private toChatEntries(message: ConversationMessage): Observable<ChatEntry> {
        if (message.profile) console.table([message.profile.scores]);

        const text$ = ObservableFrom(message.text).pipe(
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

        // Cheating..
        const latMap: { [lat: number]: string } = {
            [52.0705]: 'assets/imgs/map-den-haag.png',
            [52.1601]: 'assets/imgs/map-leiden.png',
            [52.0907]: 'assets/imgs/map-utrecht.png'
        };

        const location$: Observable<ChatEntryImage> = message.location
            ? ObservableOf({
                  type: ChatType.Image,
                  timestamp: new Date(),
                  from: 'Watson',
                  image: latMap[message.location[0]],
                  title: latMap[message.location[0]]
              } as ChatEntryImage)
            : ObservableEmpty();

        return text$.pipe(
            concat(location$),
            zip(ObservableTimer(200, 800), item => item)
        );
    }
}
