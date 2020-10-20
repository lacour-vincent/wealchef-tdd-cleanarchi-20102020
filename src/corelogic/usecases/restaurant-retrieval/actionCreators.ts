import {ActionsUnion, createAction} from "../../../redux/customAction";
import {Restaurant} from "../../models/restaurant.interface";

export const RETRIEVE_RESTAURANT = 'RETRIEVE_RESTAURANT';
export const RESTAURANT_RETRIEVED = 'RESTAURANT_RETRIEVED';

export const Actions = {
    retrieveRestaurant: () =>
        createAction(RETRIEVE_RESTAURANT),
    restaurantRetrieved: (restaurant: Restaurant | null) =>
        createAction(RESTAURANT_RETRIEVED, restaurant)
};

export type Actions = ActionsUnion<typeof Actions>;
