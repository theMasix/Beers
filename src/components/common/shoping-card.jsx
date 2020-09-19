import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { getLocalStorage, setLocalStorage } from './handleLocalStorage';
import { StyledCard ,StyledImg} from './styledComponents';
const ShopingCard = ({ data, onIncerement, onDecrement, count }) => {
    const { image_url, name, tagline, srm } = data;

    if (count.value === 0) {
        let shopingItems = getLocalStorage('SHOPINGITEMS');
        setLocalStorage('SHOPINGITEMS', shopingItems.filter(id => id !== data.id)); 
        return <></>;
    }
    return (
        <StyledCard className="text-center mx-auto h-100">
            <Card.Body>
                <StyledImg src={image_url} className="img-fluid mx-auto my-2" />
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {tagline}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="px-1">
                <ButtonGroup aria-label="Basic example" style={{ direction: "ltr" }}>
                    <Button variant="success" onClick={onIncerement}>+</Button>
                    <Button variant="danger" disabled={count.value === 0} onClick={onDecrement}>-</Button>
                    <Button variant="info" style={{ cursor: "default" }}>
                        <Badge variant="light">{count.value}</Badge> تعداد
                    </Button>
                    <Button variant="info" style={{ cursor: "default" }}>
                        <Badge variant="light">{count.value * srm}</Badge> قیمت
                    </Button>
                </ButtonGroup>

            </Card.Footer>
        </StyledCard >
    );
}

export default ShopingCard;

