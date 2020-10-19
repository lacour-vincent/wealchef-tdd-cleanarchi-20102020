import {AnyAction} from "redux";

export const cart = (state: string[] = [], action: AnyAction) => {
    if (action.type === 'ADD_ARTICLE_TO_CART') {
        return state.concat(action.payload.articleId);
    }
    return state;
};
