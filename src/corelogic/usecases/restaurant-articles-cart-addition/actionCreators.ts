import {ActionsUnion, createAction} from "../../../redux/customAction";

export const ADD_ARTICLE_TO_CART = 'ADD_ARTICLE_TO_CART';

export const Actions = {
    addRestaurantArticleToCart: (articleId: string) =>
        createAction(ADD_ARTICLE_TO_CART, { articleId })
};

export type Actions = ActionsUnion<typeof Actions>;
