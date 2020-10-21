import {Card} from "react-bootstrap";
import React, {FunctionComponent,useCallback} from "react";
import {ArticleVM} from "./viewmodels/ArticleVM";
import { useDispatch } from "react-redux";
import { addRestaurantArticleToCart } from "../../../../corelogic/usecases/restaurant-articles-cart-addition/addRestaurantArticleToCart";

interface Props {
    article: ArticleVM
}

export const ArticleCard: FunctionComponent<Props> = ({article}) => {
    const dispatch = useDispatch()
    const addToCart = useCallback(() => {
        dispatch(addRestaurantArticleToCart(article.id))
    },[dispatch,article.id])

    return <Card onClick={addToCart}>
        <Card.Header>
            Nom d'article : {article.name}
        </Card.Header>
        <Card.Body>
            <img src={article.pictureUrl} alt={article.name}/>
        </Card.Body>
        <Card.Footer>
            Prix : {article.price} €
        </Card.Footer>
    </Card>;
}
