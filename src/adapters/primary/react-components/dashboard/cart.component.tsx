import {useSelector} from "react-redux";
import {AppState} from "../../../../redux/appState.interface";
import React from "react";

export const Cart = () => {

    const cart = useSelector((state: AppState) => state.cart);

    return <div>
        <ul>
            {cart.map(article => {
                return <li key={article}>{article}</li>
            })}
        </ul>
    </div>
}
