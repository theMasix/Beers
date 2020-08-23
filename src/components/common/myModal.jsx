import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MyMedia from './myMedia';
const MyModal = ({ show, handleClose, data }) => {
  const handle=()=>{
    let storageData = localStorage.getItem('SHOPINGITEMS');
    let storageDataParse = storageData ? JSON.parse(storageData) : [];
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <MyMedia data={data} />
          <Button variant="dark" size="sm" className="float-left" onClick={handle}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                     سبد خرید
           </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;

