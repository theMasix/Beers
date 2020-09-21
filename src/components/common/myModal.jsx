import React,{useEffect} from 'react';
import { getLocalStorage, setLocalStorage } from './handleLocalStorage'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import { StyledImg } from './styledComponents';
import { toast } from "react-toastify";
import MyExpandCollapse from './MyExpandCollapse.jsx';
const MyModal = ({ show, handleClose, data }) => {

  const { image_url, name, tagline, description, abv, srm } = data;
  useEffect(()=>{

  },[])
  const onShopingBasketButtonClick = () => {
    let storageDataParse = getLocalStorage('SHOPINGITEMS');
    if (!storageDataParse.some(item => item.value === data.id)) {
      storageDataParse.push({value:data.id,expiry:new Date().getTime() + 604799337.20621168613});
      toast.success(`به سبد خرید اصافه شد:${data.name}`);
    }
    else {
      toast.error(`در سبد خرید وجود دارد:${data.name}`);
    }
    setLocalStorage('SHOPINGITEMS', storageDataParse);
    handleClose();

  }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <StyledImg src={image_url} fluid className="ml-3" />
              <Col md={8} style={{ textAlign: "right" }} >
                <h5>{name}</h5>
                <h6 className="text-muted">{tagline}</h6>
                <p><MyExpandCollapse text={description} /></p>
                <span className="font-weight-bold ml-4">{abv}درصد تلخ</span>
                <span className="font-weight-bold">{srm}دلار</span>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" size="sm" className="float-left" onClick={onShopingBasketButtonClick}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                     سبد خرید
                </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;

