import {RestaurantGateway} from "../../../corelogic/gateways/restaurantsArticlesGateway.interface";

export class InMemoryRestaurantGateway implements RestaurantGateway {

    private _restaurant: { id: string; articles: { id: string }[] } | null = null;

    retrieve(): Promise<{ id: string; articles: { id: string }[] } | null> {
        return Promise.resolve(this._restaurant);
    }

    feedWith(restaurant: { id: string; articles: { id: string }[] }) {
        this._restaurant = restaurant;
    }
}
