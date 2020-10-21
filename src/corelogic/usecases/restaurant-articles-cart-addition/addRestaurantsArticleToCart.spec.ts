import {AppState} from "../../../redux/appState.interface";
import {ReduxStore,configureStore} from "../../../redux/configureStore";
import {addRestaurantArticleToCart} from "./addRestaurantArticleToCart"

describe('Add to cart some restaurants\' articles', () => {

    let store: ReduxStore;
    let initialState: AppState;

    beforeEach(() => {
        store = configureStore(null);
        initialState = store.getState();
    });

    describe('No article added in the cart', () => {

        it('should end up with an empty cart', () => {
            expect(store.getState()).toEqual({
                ...initialState,
                cart: []
            });
        });

    });

    describe('Some add articles in the cart', () => {

        it('should add one article in the cart', () => {
            store.dispatch(addRestaurantArticleToCart("123abc"));
            expect(store.getState()).toEqual({
                ...initialState,
                cart: ['123abc']
            });
        });

    });

});
