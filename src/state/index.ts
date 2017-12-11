import { combineReducers } from '@ngfk/ts-redux';

import { Chat } from '../models/chat';
import { AuthActionMap, authReducer } from './auth.state';
import { ChatActionMap, chatReducer } from './chat.state';

export interface ActionMap extends AuthActionMap, ChatActionMap {}

export interface State {
    readonly auth: string;
    readonly chat: Chat;
}

export const reducer = combineReducers<State>({
    auth: authReducer,
    chat: chatReducer
});
