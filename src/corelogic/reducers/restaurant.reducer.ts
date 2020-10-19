import {AnyAction} from "redux";

export const restaurant = (state: { id: string, articles: string[] } | null = null, action: AnyAction) => {
    if (action.type === 'RESTAURANT_RETRIEVED') {
        return action.payload;
    }
    return state;
};
