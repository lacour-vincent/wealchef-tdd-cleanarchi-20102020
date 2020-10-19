import {AnyAction, applyMiddleware, combineReducers, createStore as createReduxStore} from "redux";
import {AppState} from "./appState.interface";
import {cart} from "../corelogic/reducers/restaurantArticlesCart.reducer";
import {restaurant} from "../corelogic/reducers/restaurant.reducer";
import thunk from "redux-thunk";

export const createStore = (dependencies: any) => {
    return createReduxStore<AppState, AnyAction, unknown, unknown>(
        combineReducers({
            cart,
            restaurant
        }), applyMiddleware(thunk.withExtraArgument(dependencies)))
}
