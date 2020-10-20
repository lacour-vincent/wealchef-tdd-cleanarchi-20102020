import {getRestaurantInfo} from "./restaurantViewModelGenerator.selector";
import {configureStore, ReduxStore} from "../../../../redux/configureStore";
import * as actionCreators from "../../../../corelogic/usecases/restaurant-retrieval/actionCreators";
import {wealSushiRestaurant} from "../../../../testfixtures/restaurantFixture";

describe('Restaurant view model generator', () => {

    let store: ReduxStore;

    beforeEach(() => {
       store = configureStore(null);
    });

    it('should adapt restaurants info to the view', async () => {
        await store.dispatch(actionCreators.Actions.restaurantRetrieved(wealSushiRestaurant))
        expect(getRestaurantInfo(store.getState())).toEqual({
            restaurant: {
                name: 'WealSushi',
                pictureUrl: 'http://wealsushi.jpg',
                address: '4 rue du Nem 75001 Paris',
                schedule: {
                    start: '12:00',
                    end: '14:00'
                },
            },
            articles: {
                id: '123abc',
                name: 'RIZ TARTARE',
                pictureUrl: 'http://riztartare.jpg'
            }
        })
    });

});
