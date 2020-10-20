import {RestaurantGateway} from "../../../corelogic/gateways/restaurantsArticlesGateway.interface";
import {Restaurant} from "../../../corelogic/models/restaurant.interface";
import {wealSushiRestaurant} from "../../../index";

export class HttpRestaurantGateway implements RestaurantGateway {

    retrieve(): Promise<Restaurant | null> {
        return new Promise<Restaurant | null>(resolve => {
            setTimeout(() => {
                resolve(wealSushiRestaurant());
            }, 1000);
        });
    }

}
