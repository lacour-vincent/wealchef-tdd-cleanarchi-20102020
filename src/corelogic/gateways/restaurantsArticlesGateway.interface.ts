import {Restaurant} from "../models/restaurant.interface";

export interface RestaurantGateway {
    retrieve(): Promise<Restaurant | null>
}
