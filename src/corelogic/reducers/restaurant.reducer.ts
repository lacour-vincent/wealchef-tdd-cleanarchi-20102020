import * as actionCreators from "../../corelogic/usecases/restaurant-retrieval/actionCreators";

export const restaurant = (state: { id: string, articles: { id: string }[] } | null = null, action: actionCreators.Actions) => {
    if (action.type === 'RESTAURANT_RETRIEVED') {
        return action.payload;
    }
    return state;
};
