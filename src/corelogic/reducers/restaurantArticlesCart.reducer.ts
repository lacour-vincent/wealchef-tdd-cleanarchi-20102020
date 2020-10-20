import {ActionWithPayload} from "../../redux/utils";

export const cart = (state: string[] = [], action: ActionWithPayload<string, any>) => {
    if (action.type === 'ADD_ARTICLE_TO_CART') {
        return state.concat(action.payload.articleId);
    }
    return state;
};
