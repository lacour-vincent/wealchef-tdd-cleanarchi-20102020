import {AppState} from "./appState.interface";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Dependencies} from "./dependencies";
import {Action, Store} from "redux";

export interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload?: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? {type} : {type, payload};
}

type FunctionType = (...args: any[]) => any
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export type ThunkResult<R> = ThunkAction<R, AppState, Dependencies, Action>;

export type ReduxStore = Store<AppState> & { dispatch: ThunkDispatch<AppState, Dependencies, Action> }