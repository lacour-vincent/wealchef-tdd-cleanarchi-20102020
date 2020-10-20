import {Action, applyMiddleware, combineReducers, createStore as createReduxStore} from "redux";
import {cart} from "../corelogic/reducers/restaurantArticlesCart.reducer";
import {restaurant} from "../corelogic/reducers/restaurant.reducer";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {Dependencies} from "./dependencies";
import {AppState} from "./appState.interface";

export const createStore = (dependencies: Dependencies) => {
    return createReduxStore(
        combineReducers({
            cart,
            restaurant
        }), applyMiddleware(thunk.withExtraArgument(dependencies) as ThunkMiddleware<AppState, Action, Dependencies>));
};
