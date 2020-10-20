import * as actionCreators from "../../corelogic/usecases/restaurant-retrieval/actionCreators";
import {Restaurant} from "../models/restaurant.interface";

export const restaurant = (state: Restaurant | null = null,
                           action: actionCreators.Actions) => {
    if (action.type === 'RESTAURANT_RETRIEVED') {
        return action.payload;
    }
    return state;
};
