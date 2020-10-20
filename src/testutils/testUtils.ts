import {ReduxStore} from "../redux/configureStore";

export const expectChangedStore = (store: ReduxStore) => (done: any, expectFn: () => void) => {
    const unsubscribe = store.subscribe(() => {
        expectFn();
        unsubscribe();
        done();
    });
}
