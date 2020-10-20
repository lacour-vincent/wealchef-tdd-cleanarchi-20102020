import {Restaurant} from "../corelogic/models/restaurant.interface";

export interface AppState {
    cart: string[];
    restaurant: {
        data: Restaurant | null,
        fetching: boolean,
        fetched: boolean;
    }
}
