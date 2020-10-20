import {RestaurantGateway} from "../../../corelogic/gateways/restaurantsArticlesGateway.interface";
import {Restaurant} from "../../../corelogic/models/restaurant.interface";

export class InMemoryRestaurantGateway implements RestaurantGateway {

    private _restaurant: Restaurant | null = null;

    async retrieve(): Promise<Restaurant | null> {
        return this._restaurant;
    }

    feedWith(restaurant: Restaurant) {
        this._restaurant = restaurant;
    }
}
