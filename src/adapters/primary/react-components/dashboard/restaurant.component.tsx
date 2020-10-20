import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../../redux/appState.interface";
import React, {useEffect} from "react";
import {retrieveRestaurant} from "../../../../corelogic/usecases/restaurant-retrieval/retrieveRestaurant";
import {Card, Col, Container, Row} from "react-bootstrap";

export const Restaurant = () => {

    const restaurant = useSelector((state: AppState) => state.restaurant);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveRestaurant);
    }, [dispatch]);

    if (!restaurant)
        return null;

    return <Container>
        <div className="restaurant-item mt-5">
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
                        <li>Horaires : {restaurant.schedule.start.toLocaleTimeString()}
                            - {restaurant.schedule.end.toLocaleTimeString()}</li>
                    </ul>
                </Col>
            </Row>
        </div>
        <Row>
            <Col>
                {restaurant.articles.map(article => {
                        return <Row><Col sm={3}>
                            <Card>
                                <Card.Header>
                                    Nom d'article : {article.name.toUpperCase()}
                                </Card.Header>
                                <Card.Body>
                                    <img src={article.pictureUrl} alt={article.name}/>
                                </Card.Body>
                                <Card.Footer>
                                    Prix : {article.price} €
                                </Card.Footer>
                            </Card>
                        </Col>
                        </Row>
                    }
                )}
            </Col>
        </Row>
    </Container>;
}
