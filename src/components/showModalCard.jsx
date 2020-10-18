import React, { useState } from "react";
import Beer from "./common/mycard";
import MyModal from "./common/myModal";
import FavsContextProvider from '../contexts/favoritescontext'
const ShowModalCard = ({ data, isStarActive, onStarClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <FavsContextProvider>
        <Beer
          onClick={handleShow}
          data={data}
        />
      </FavsContextProvider>
      <MyModal show={show} handleClose={handleClose} data={data} />
    </>
  );
};

export default ShowModalCard;
