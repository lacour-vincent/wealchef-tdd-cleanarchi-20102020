import {AppState} from "../../../redux/appState.interface";
import {Store} from "redux";
import {configureStore} from "../../../redux/configureStore";

describe('Add to cart some restaurants\' articles', () => {

    let store: Store<AppState>;
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
            store.dispatch({type: 'ADD_ARTICLE_TO_CART', payload: {articleId: '123abc'}});
            expect(store.getState()).toEqual({
                ...initialState,
                cart: ['123abc']
            });
        });

    });

});
