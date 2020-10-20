import {AppState} from "../../../redux/appState.interface";
import {createStore} from "../../../redux/createStore";
import {InMemoryRestaurantGateway} from "../../../adapters/secondary/gateways/inMemoryRestaurantGateway";
import {retrieveRestaurant} from "./retrieveRestaurant";
import {ReduxStore} from "../../../redux/utils";

describe('Retrieve restaurants', () => {

    let store: ReduxStore;
    let restaurantGateway: InMemoryRestaurantGateway;
    let initialState: AppState;

    beforeEach(() => {
        restaurantGateway = new InMemoryRestaurantGateway();
        store = createStore({restaurantGateway});
        initialState = store.getState();
    });

    describe('No restaurant available', () => {

        it('should not retrieve any restaurant', () => {
            expect(store.getState()).toEqual({
                ...initialState,
                restaurant: null
            });
        });

    });

    describe('One restaurant existing', () => {

        it('should retrieve the nearest restaurant', () => {
            restaurantGateway.feedWith({id: '4556def', articles: [{id: '123abc'}]});
            store.dispatch(retrieveRestaurant);
            store.subscribe(() => {
                expect(store.getState()).toEqual({
                    ...initialState,
                    restaurant: {id: '4556def', articles: [{id: '123abc'}]}
                });
            });
        });

    });

});
