import {AppState} from "../../../redux/appState.interface";
import {InMemoryRestaurantGateway} from "../../../adapters/secondary/gateways/inMemoryRestaurantGateway";
import {retrieveRestaurant} from "./retrieveRestaurant";
import {configureStore, ReduxStore} from "../../../redux/configureStore";
import {wealSushiRestaurant} from "../../../testfixtures/restaurantFixture";
import {expectChangedStore} from "../../../testutils/testUtils";

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

        it('should not retrieve any restaurant', done => {
            store.dispatch(retrieveRestaurant);
            expectChangedStore(store)(done, () =>
                expect(store.getState()).toEqual({
                    ...initialState,
                    restaurant: {
                        data: null,
                        fetching: false,
                        fetched: true
                    }
                }));
        });

    });

    describe('One restaurant available', () => {

        beforeEach(() => {
            restaurantGateway.feedWith(wealSushiRestaurant);
        });

        it('should retrieve the restaurant', done => {
            store.dispatch(retrieveRestaurant);
            expectChangedStore(store)(done, () =>
                expect(store.getState()).toEqual({
                    ...initialState,
                    restaurant: {
                        data: wealSushiRestaurant,
                        fetching: false,
                        fetched: true
                    }
                }));
        });

        it('should track restaurant retrieval', done => {
            expectChangedStore(store)(done, () =>
                expect(store.getState()).toEqual({
                    ...initialState,
                    restaurant: {
                        data: null,
                        fetching: true,
                        fetched: false
                    },
                })
            );
            store.dispatch(retrieveRestaurant);
        });

    });

});
