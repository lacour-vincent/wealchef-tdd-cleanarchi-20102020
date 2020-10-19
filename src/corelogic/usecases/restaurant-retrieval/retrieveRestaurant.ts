import {AppState} from "../../../store/appState.interface";
import {RestaurantGateway} from "../../gateways/restaurantsArticlesGateway.interface";

export const retrieveRestaurant = () =>
    async (dispatch: any,
           state: AppState,
           {restaurantGateway}: { restaurantGateway: RestaurantGateway }) => {
        dispatch({type: 'RETRIEVE_RESTAURANT'});
        const restaurant = await restaurantGateway.retrieve();
        dispatch({type: 'RESTAURANT_RETRIEVED', payload: restaurant});
    }
