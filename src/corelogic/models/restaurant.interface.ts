import {RestaurantArticle} from "./restaurantArticle.interface";

export interface Restaurant {
    id: string;
    name: string;
    address: string;
    schedule: {start: Date, end: Date}
    pictureUrl: string;
    articles: RestaurantArticle[]
}
