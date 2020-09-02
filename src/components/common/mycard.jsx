import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Star from "./star";
import { getLocalStorage, setLocalStorage } from "./handleLocalStorage";
const Beer = ({ data, onClick, onStarClick, isStarActive }) => {
  const [beerClicked, setBeerClicked] = useState([]);

  useEffect(() => {
    let storageDataParse = getLocalStorage("BEER");
    setBeerClicked(storageDataParse);
  }, []);

  // const handleClick = () => {
  //   beerClicked.includes(data.id)
  //     ? setBeerClicked(beerClicked.filter((item) => item !== data.id))
  //     : setBeerClicked((beerClicked) => [...beerClicked, data.id]);
  //   setLocalStorage("BEER", beerClicked);
  // };

  const { name, tagline, image_url } = data;
  if (data)
    return (
      <Card
        style={{
          cursor: "pointer",
          maxWidth: "18rem",
          boxShadow: "rgba(0, 0, 0, 0.05) 2px 2px 2px 2px",
        }}
        className="text-center h-100"
      >
        <Card.Header>
          <Star onStarClick={onStarClick} isStarActive={isStarActive} />
        </Card.Header>
        <Card.Body onClick={onClick}>
          <Image
            style={{ maxHeight: "18rem", maxWidth: "8rem" }}
            src={image_url}
            className="img-fluid mx-auto my-2"
          />
          <Card.Title>{name}</Card.Title>
          <Card.Text>{tagline}</Card.Text>
        </Card.Body>
      </Card>
    );
  return <></>;
};

export default Beer;
