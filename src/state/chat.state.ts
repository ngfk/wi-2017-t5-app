import { createReducer } from '@ngfk/ts-redux';

import { Chat, ChatEntry } from '../models/chat';

export interface ChatActionMap {
    CHAT_APPEND: ChatEntry;
    CHAT_CLEAR: void;
}

const initial: Chat = [];

export const chatReducer = createReducer<Chat, ChatActionMap>(initial, {
    CHAT_APPEND: (state, payload) => [...state, payload],
    CHAT_CLEAR: () => []
});
