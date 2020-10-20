import {getRestaurantInfo} from "./restaurantViewModelGenerator.selector";
import {configureStore, ReduxStore} from "../../../../../redux/configureStore";
import * as actionCreators from "../../../../../corelogic/usecases/restaurant-retrieval/actionCreators";
import {wealSushiRestaurant} from "../../../../../testfixtures/restaurantFixture";

describe('Restaurant view model generator', () => {

    let store: ReduxStore;

    beforeEach(() => {
        store = configureStore(null);
    });

    describe('One restaurant available', () => {

        it('should adapt restaurants info to the view', () => {
            store.dispatch(actionCreators.Actions.restaurantRetrieved(wealSushiRestaurant))
            expect(getRestaurantInfo(store.getState())).toEqual({
                fetching: false,
                fetched: true,
                restaurant: {
                    name: 'Weal Sushi',
                    pictureUrl: 'http://wealsushi.jpg',
                    address: '4 rue du Nem 75001 Paris',
                    schedule: {
                        start: '12:00',
                        end: '14:00'
                    },
                },
                articles: [{
                    id: '123abc',
                    name: 'Riz Tartare',
                    pictureUrl: 'http://riztartare.jpg',
                    price: '12 €'
                }]
            })
        });

        it('should keep track of the fetching currently in progress', () => {
            store.dispatch(actionCreators.Actions.retrieveRestaurant());
            expect(getRestaurantInfo(store.getState())).toEqual({
                fetching: true,
                restaurant: null,
                articles: [],
                fetched: false
            })
        });

    });

    describe('No restaurant available', () => {

        it('should not view any restaurant', () => {
            store.dispatch(actionCreators.Actions.retrieveRestaurant());
            store.dispatch(actionCreators.Actions.restaurantRetrieved(null))
            expect(getRestaurantInfo(store.getState())).toEqual({
                restaurant: null, articles: [], fetching: false, fetched: true
            });
        });

    });

});
