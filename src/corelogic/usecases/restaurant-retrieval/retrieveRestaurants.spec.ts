import { AppState } from '../../../redux/appState.interface';
import { InMemoryRestaurantGateway } from '../../../adapters/secondary/gateways/inMemoryRestaurantGateway';
import { retrieveRestaurant } from './retrieveRestaurant';
import { configureStore, ReduxStore } from '../../../redux/configureStore';
import { wealSushiRestaurant } from '../../../testfixtures/restaurantFixture';

describe('Restaurant retrieval', () => {
	let store: ReduxStore;
	let restaurantGateway: InMemoryRestaurantGateway;
	let initialState: AppState;

	beforeEach(() => {
		restaurantGateway = new InMemoryRestaurantGateway();
		store = configureStore({ restaurantGateway });
		initialState = store.getState();
	});

	describe('No restaurant available', () => {
		it('should not retrieve any restaurant', async () => {
			await store.dispatch(retrieveRestaurant);
			expect(store.getState()).toEqual({
				...initialState,
				restaurant: {
					data: null,
					fetching: false,
					fetched: true,
				},
			});
		});
	});

	describe('One restaurant available', () => {
		beforeEach(() => {
			restaurantGateway.feedWith(wealSushiRestaurant);
		});

		it('should retrieve the restaurant', async () => {
			await store.dispatch(retrieveRestaurant);
			expect(store.getState()).toEqual({
				...initialState,
				restaurant: {
					data: wealSushiRestaurant,
					fetching: false,
					fetched: true,
				},
			});
		});

		it('should track restaurant retrieval', () => {
			store.dispatch(retrieveRestaurant);
			expect(store.getState()).toEqual({
				...initialState,
				restaurant: {
					data: null,
					fetching: true,
					fetched: false,
				},
			});
		});

		it('should keep the restaurant has been retrieved', async () => {
			await store.dispatch(retrieveRestaurant);
			store.dispatch({ type: null });
			expect(store.getState()).toEqual({
				...initialState,
				restaurant: {
					data: wealSushiRestaurant,
					fetching: false,
					fetched: true,
				},
			});
		});

		it('should track a second time the restaurant retrieval', async () => {
			await store.dispatch(retrieveRestaurant);
			store.dispatch(retrieveRestaurant);
			expect(store.getState()).toEqual({
				...initialState,
				restaurant: {
					data: wealSushiRestaurant,
					fetching: true,
					fetched: false,
				},
			});
		});
	});
});
