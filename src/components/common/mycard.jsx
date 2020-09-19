import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Star from "./star";
import { StyledCard, StyledImg } from './styledComponents';

const Beer = ({ data, onClick, onStarClick, isStarActive }) => {
  const { name, tagline, image_url } = data;
  if (data)
    return (
      <StyledCard className="text-center mx-auto h-100">
        <Card.Header>
          <Star onStarClick={onStarClick} isStarActive={isStarActive} />
        </Card.Header>
        <Card.Body onClick={onClick}>
          <StyledImg
            src={image_url}
            className="img-fluid"
          />
          <Card.Title>{name}</Card.Title>
          <Card.Text>{tagline}</Card.Text>
        </Card.Body>
      </StyledCard>
    );
  return <></>;
};

export default Beer;
