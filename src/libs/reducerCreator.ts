import {
    ActionType,
    createAction as typesafeCreateAction,
    createReducer as typesafeCreateReducer,
} from 'typesafe-actions';

export function createReducer<S, A extends { [key: string]: unknown }>(initialState: S, actions: A) {
    type IActions = ActionType<typeof actions>;
    type IStates = typeof initialState;

    return typesafeCreateReducer<IStates, IActions>(initialState);
}

export function createAction<T = unknown>(type: string) {
    return typesafeCreateAction(type, (payload: T) => payload)();
}