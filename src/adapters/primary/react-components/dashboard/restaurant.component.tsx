import {Col, Row} from "react-bootstrap";
import React, {FunctionComponent} from "react";
import {RestaurantVM} from "./viewmodels/restaurantVM";

interface Props {
    restaurant: RestaurantVM
}

export const Restaurant: FunctionComponent<Props> = ({restaurant}) => {

    return <div className="restaurant-item mt-5">
        <Row>
            <Col>
                <img src={restaurant.pictureUrl} alt={restaurant.name}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <ul>
                    <li>Nom : {restaurant.name}</li>
                    <li>Adresse: {restaurant.address}</li>
                    <li>Horaires : {restaurant.schedule.start} - {restaurant.schedule.end}</li>
                </ul>
            </Col>
        </Row>
    </div>
};
