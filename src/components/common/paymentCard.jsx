import React from 'react';
import { ButtonGroup, Badge, Card, Button } from 'react-bootstrap'
const PaymentCard = ({ basketItemCount, totalPrice }) => {
    return (
        <Card body className="p-0 mx-auto" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 4px 4px 4px 4px" }}>
            <ul class="list-group list-group-flush p-0">
                <li class="list-group-item d-flex justify-content-between">
                    <span >تعداد کالا ها:</span>
                    <Badge className="d-flex justify-content-center align-items-center" pill variant="info">{basketItemCount}</Badge>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span >مبلغ قابل پرداخت:</span>
                    <Badge className="d-flex justify-content-center align-items-center" pill variant="info">{totalPrice}</Badge>
                </li>
                <li class="list-group-item d-flex justify-content-center">
                    <ButtonGroup aria-label="Basic example" style={{ direction: "ltr" }}>
                        <Button variant="danger">انصراف</Button>
                        <Button variant="success">پرداخت</Button>
                    </ButtonGroup>
                </li>
            </ul>

        </Card>

    );
}

export default PaymentCard;