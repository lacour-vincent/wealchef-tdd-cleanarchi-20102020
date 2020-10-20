import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {retrieveRestaurant} from "../../../../corelogic/usecases/restaurant-retrieval/retrieveRestaurant";
import {Col, Container, Row} from "react-bootstrap";
import {getRestaurantInfo} from "./viewmodels/restaurantViewModelGenerator.selector";
import {ArticleCard} from "./articleCard.component";
import {Restaurant} from "./restaurant.component";

export const Dashboard = () => {

    const {restaurant, articles, fetching, fetched} = useSelector(getRestaurantInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveRestaurant);
    }, [dispatch]);

    if (fetching)
        return <p>Chargement du restaurant ...</p>

    if (!fetched)
        return null;

    if (!restaurant)
        return <p>Il n'y a pas de restaurant à proximité</p>;

    return <Container>
        <Restaurant restaurant={restaurant}/>
        <Row>
            <Col>
                {articles.map(article =>
                    <Row key={article.id}>
                        <Col sm={3}>
                            <ArticleCard article={article}/>
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    </Container>;
}
