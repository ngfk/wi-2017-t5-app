import { createReducer } from '@ngfk/ts-redux';

export interface AuthActionMap {
    AUTH_SET_TOKEN: string;
    AUTH_DEL_TOKEN: void;
}

export const authReducer = createReducer<string, AuthActionMap>('', {
    AUTH_SET_TOKEN: (_, payload) => payload,
    AUTH_DEL_TOKEN: () => ''
});
