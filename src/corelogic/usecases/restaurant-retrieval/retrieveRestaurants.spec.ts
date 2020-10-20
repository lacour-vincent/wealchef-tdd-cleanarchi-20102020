import {AppState} from "../../../redux/appState.interface";
import {InMemoryRestaurantGateway} from "../../../adapters/secondary/gateways/inMemoryRestaurantGateway";
import {retrieveRestaurant} from "./retrieveRestaurant";
import {configureStore, ReduxStore} from "../../../redux/configureStore";
import {wealSushiRestaurant} from "../../../testfixtures/restaurantFixture";

describe('Restaurant retrieval', () => {

    let store: ReduxStore;
    let restaurantGateway: InMemoryRestaurantGateway;
    let initialState: AppState;

    beforeEach(() => {
        restaurantGateway = new InMemoryRestaurantGateway();
        store = configureStore({restaurantGateway});
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

    describe('One restaurant available', () => {

        it('should retrieve the restaurant', () => {
            restaurantGateway.feedWith(wealSushiRestaurant);
            store.dispatch(retrieveRestaurant);
            store.subscribe(() => {
                expect(store.getState()).toEqual({
                    ...initialState,
                    restaurant: {id: '456def', articles: [{id: '123abc'}]}
                });
            });
        });

    });

});
