import {Card} from "react-bootstrap";
import React, {FunctionComponent} from "react";
import {ArticleVM} from "./viewmodels/ArticleVM";

interface Props {
    article: ArticleVM
}

export const ArticleCard: FunctionComponent<Props> = ({article}) => {
    return <Card>
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
