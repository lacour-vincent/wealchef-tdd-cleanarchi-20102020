import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {InMemoryRestaurantGateway} from "./adapters/secondary/gateways/inMemoryRestaurantGateway";
import {configureStore} from "./redux/configureStore";
import wealSushiImg from "./adapters/primary/assets/img/wealsushi.jpeg"
import {HttpRestaurantGateway} from "./adapters/secondary/gateways/httpRestaurantGateway";

let restaurantGateway;
if (process.env.REACT_APP_INMEMORY === 'true') {
    restaurantGateway = new InMemoryRestaurantGateway();
    restaurantGateway.feedWith(wealSushiRestaurant());
} else
    restaurantGateway = new HttpRestaurantGateway();

const store = configureStore({
        restaurantGateway
    }
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export function wealSushiRestaurant() {
    return {
        id: '4556def',
        name: 'WealSushi',
        address: '4 rue du Nem 75001 Paris',
        schedule: {
            start: new Date(2020, 3, 4, 12),
            end: new Date(2020, 3, 4, 14)
        },
        pictureUrl: wealSushiImg,
        articles: [
            {
                id: '123abc',
                name: 'Riz Tartare',
                pictureUrl: 'http://riztartare.jpg',
                price: 12
            },
        ]
    }
};
