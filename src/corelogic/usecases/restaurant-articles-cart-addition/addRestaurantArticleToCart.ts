import * as actionCreators from "./actionCreators";
import {ThunkResult} from "../../../redux/configureStore";


export const addRestaurantArticleToCart:  (articleId: string) => ThunkResult<void> = articleId => (dispatch,state) => {
    dispatch(actionCreators.Actions.addRestaurantArticleToCart(articleId));
}
