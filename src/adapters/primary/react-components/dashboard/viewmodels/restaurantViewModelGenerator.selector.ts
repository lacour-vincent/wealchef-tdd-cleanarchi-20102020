import {AppState} from "../../../../../redux/appState.interface";
import {format} from 'date-fns'
import {RestaurantVM} from "./restaurantVM";
import {ArticleVM} from "./ArticleVM";
import {createSelector} from "reselect";
import {Restaurant} from "../../../../../corelogic/models/restaurant.interface";

export const getRestaurantInfo = createSelector<AppState, Restaurant | null, boolean, boolean,
    { restaurant: RestaurantVM | null, articles: ArticleVM[], fetching: boolean, fetched: boolean }>(
    state => state.restaurant.data,
    state => state.restaurant.fetching,
    state => state.restaurant.fetched,
    (data, fetching, fetched) => {
        if (!data)
            return {restaurant: null, articles: [], fetching, fetched};
        return {
            fetching,
            fetched,
            restaurant: {
                name: insertSpaceBeforeEachUppercase(data!.name),
                pictureUrl: data!.pictureUrl,
                address: data!.address,
                schedule: {
                    start: format(data!.schedule.start, 'HH:mm'),
                    end: format(data!.schedule.end, 'HH:mm'),
                },
            },
            articles: data!.articles.map(article => ({
                id: article.id,
                name: article.name,
                pictureUrl: article.pictureUrl,
                price: article.price + ' €'
            }))
        };
    }
)

const insertSpaceBeforeEachUppercase = (str: string) =>
    str.replace(/([A-Z])/g, ' $1').trim();

