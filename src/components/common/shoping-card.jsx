import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { getLocalStorage, setLocalStorage } from './handleLocalStorage';
const ShopingCard = ({ data, onIncerement, onDecrement, count }) => {
    const { image_url, name, tagline, srm } = data;

    if (count.value === 0) {
        let shopingItems = getLocalStorage('SHOPINGITEMS');
        setLocalStorage('SHOPINGITEMS', shopingItems.filter(id => id !== data.id));
        return <></>;
    }
    return (
        <Card style={{ cursor: "pointer", maxHeight: "23rem", maxWidth: '15rem', boxShadow: "rgba(0, 0, 0, 0.05) 4px 4px 4px 4px" }} className="text-center h-100">
            <Card.Body>
                <Image style={{maxHeight: "10rem", maxWidth: "8rem" }} src={image_url} className="img-fluid mx-auto my-2" />
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {tagline}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <ButtonGroup aria-label="Basic example" style={{ direction: "ltr", float: "left" }}>
                    <Button variant="success" onClick={onIncerement}>+</Button>
                    <Button variant="danger" disabled={count.value === 0} onClick={onDecrement}>-</Button>
                    <Button variant="info" style={{ cursor: "default" }}>
                        تعداد <Badge variant="light">{count.value}</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                    <Button variant="info" style={{ cursor: "default" }}>
                        قیمت <Badge variant="light">{count.value * srm}</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                </ButtonGroup>

            </Card.Footer>
        </Card >
    );
}

export default ShopingCard;

