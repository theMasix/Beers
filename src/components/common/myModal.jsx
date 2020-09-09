import React from 'react';
import {getLocalStorage,setLocalStorage} from './handleLocalStorage'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { toast } from "react-toastify";
import MyExpandCollapse from './MyExpandCollapse.jsx';
const MyModal = ({ show, handleClose, data }) => {

  const { image_url, name, tagline, description, abv, srm } = data;

  const onShopingBasketButtonClick = () => {
     let storageDataParse=getLocalStorage('SHOPINGITEMS');
    if (!storageDataParse.includes(data.id)) {
      storageDataParse.push(data.id);
    }
      setLocalStorage('SHOPINGITEMS',storageDataParse);
    toast.success(`به سبد خرید اصافه شد:${data.name}`);
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={4}>
                <Image src={image_url} fluid style={{ maxWidth: "8rem", maxHeight: "18rem" }} />
              </Col>
              <Col md={8} style={{ textAlign: "right" }}>
                <h5>{name}</h5>
                <h6 className="text-muted">{tagline}</h6>
                <p><MyExpandCollapse text={description}/></p>
                <ul style={{listStyle:"none",paddingRight:"0px"}}>
                  <li>درصد تلخی{abv}</li>
                  <li>قیمت{srm}</li>
                </ul>
                <Button variant="dark" size="sm" className="float-left" onClick={onShopingBasketButtonClick}>
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                     سبد خرید
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;

