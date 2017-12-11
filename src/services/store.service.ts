import { Injectable } from '@angular/core';
import { Store } from '@ngfk/ts-redux';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { map } from 'rxjs/operators/map';

import { ActionMap, reducer, State } from '../state';

const STATE_KEY = 'wi-2017-t5-state';

@Injectable()
export class StoreService extends Store<State, ActionMap> {
    private state$: Observable<State>;

    public constructor() {
        super(
            reducer,
            undefined,
            window['__REDUX_DEVTOOLS_EXTENSION__'] &&
                window['__REDUX_DEVTOOLS_EXTENSION__']()
        );

        // Forward redux state updates to an observable stream
        const stateSubj = new BehaviorSubject<State>(this.getState());
        this.state$ = stateSubj.asObservable();
        this.subscribe(() => stateSubj.next(this.getState()));
    }

    public async initialize(): Promise<void> {
        // Save the state whenever a change happens
        this.state$.pipe(debounceTime(500)).subscribe(() => this.store());

        // Set loaded state as initial state
        const storedState = this.load();
        this.initial = storedState;
        this.reset(this.initial);
    }

    public select<T>(selector: (state: State) => T): Observable<T> {
        return this.state$.pipe(
            // Map using the provided selector
            map(selector),
            // Only emit updates when the selected property change
            distinctUntilChanged()
        );
    }

    private store(): void {
        const state = JSON.stringify(this.getState());
        window.localStorage.setItem(STATE_KEY, state);
    }

    private load(): State | undefined {
        const storedState = window.localStorage.getItem(STATE_KEY);
        if (!storedState) return undefined;

        return JSON.parse(storedState);
    }
}
