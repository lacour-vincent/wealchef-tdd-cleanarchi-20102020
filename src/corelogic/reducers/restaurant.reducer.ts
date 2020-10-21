import * as actionCreators from "../../corelogic/usecases/restaurant-retrieval/actionCreators";
import {Restaurant} from "../models/restaurant.interface";
import {combineReducers} from "redux";

const data = (state: Restaurant | null = null,
              action: actionCreators.Actions) => {
    if (action.type === 'RESTAURANT_RETRIEVED') {
        return action.payload;
    }
    return state;
};

const fetching = (state: boolean = false, action: actionCreators.Actions) => {
    return action.type === 'RETRIEVE_RESTAURANT';
}

const fetched = (state: boolean = false, action: actionCreators.Actions) => {
    if(action.type === 'RETRIEVE_RESTAURANT')
       return false;
    if(action.type === 'RESTAURANT_RETRIEVED')
       return true;
    return state;
};

export default combineReducers({
    data,
    fetching,
    fetched
});
