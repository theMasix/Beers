import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Star from "./star";
import { FavsContext } from '../../contexts/favoritescontext'
import { StyledCard, StyledImg } from './styledComponents';

const Beer = ({ data, onClick }) => {
  const { favs, handleFavs } = useContext(FavsContext);
  const { name, tagline, image_url, id } = data;
  if (data)
    return (
      <StyledCard className="text-center  h-100">
        <Card.Header>
          <Star onStarClick={() => handleFavs(id)} isStarActive={favs.includes(id)} />
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
