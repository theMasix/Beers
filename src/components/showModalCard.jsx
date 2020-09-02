import React, { useState } from 'react';
import Beer from './common/mycard';
import MyModal from './common/myModal';
const ShowModalCard = ({ data }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Beer onClick={handleShow} data={data} />
            <MyModal show={show} handleClose={handleClose} data={data} />
        </>
    );
}

export default ShowModalCard;