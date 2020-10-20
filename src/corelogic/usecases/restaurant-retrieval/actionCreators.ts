import {ActionsUnion, createAction} from "../../../redux/customAction";

export const RETRIEVE_RESTAURANT = 'RETRIEVE_RESTAURANT';
export const RESTAURANT_RETRIEVED = 'RESTAURANT_RETRIEVED';

export const Actions = {
    retrieveRestaurant: () =>
        createAction(RETRIEVE_RESTAURANT),
    restaurantRetrieved: (restaurant: { id: string, articles: { id: string }[] } | null) =>
        createAction(RESTAURANT_RETRIEVED, restaurant)
};

export type Actions = ActionsUnion<typeof Actions>;
