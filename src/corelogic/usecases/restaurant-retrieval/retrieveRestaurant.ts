import * as actionCreators from "./actionCreators";
import {ThunkResult} from "../../../redux/configureStore";


export const retrieveRestaurant: ThunkResult<Promise<void>> = async (dispatch,
                                                                     state,
                                                                     {restaurantGateway}) => {
    dispatch(actionCreators.Actions.retrieveRestaurant());
    const restaurant = await restaurantGateway.retrieve();
    dispatch(actionCreators.Actions.restaurantRetrieved(restaurant));
}
