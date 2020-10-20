import {Restaurant} from "../corelogic/models/restaurant.interface";

export interface AppState {
    cart: string[];
    restaurant: Restaurant | null
}
