import {AppState} from "../../../store/appState.interface";
import {Store} from "redux";
import {createStore} from "../../../store/createStore";
import {InMemoryRestaurantGateway} from "../../../adapters/secondary/gateways/inMemoryRestaurantGateway";
import {retrieveRestaurant} from "./retrieveRestaurant";

describe('Retrieve restaurants', () => {

    let store: Store<AppState>;
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
            store.dispatch<any>(retrieveRestaurant());
            store.subscribe(() => {
                expect(store.getState()).toEqual({
                    ...initialState,
                    restaurant: {id: '4556def', articles: [{id: '123abc'}]}
                });
            });
        });

    });

});
