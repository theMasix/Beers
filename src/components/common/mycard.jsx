import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Star from './star'
import MyExpandCollapse from './MyExpandCollapse';
const Beer = ({ data, onClick }) => {

  const handleStorage = clicked => {
    let storageData = localStorage.getItem('FAVORITES');
    let storageDataParse = storageData ? JSON.parse(storageData) : [];
    if (clicked) {
      if (!storageDataParse.includes(data.id)) {
        storageDataParse.push(data.id);
      }
    } else {
      storageDataParse = storageDataParse.filter(id => id !== data.id)
    }
    localStorage.setItem('FAVORITES', JSON.stringify(storageDataParse));
  }

  const [clicked, setClicked] = useState(false);

  const handleStarSelect = () => {
    setClicked((prevState) => {
      const newClicked = !prevState;
      handleStorage(newClicked);
      return newClicked
    })
  }

  const { name, tagline, image_url } = data;
  if(data) return (
    <Card style={{ cursor: "pointer", maxWidth: '18rem', boxShadow: "rgba(0, 0, 0, 0.05) 2px 2px 2px 2px" }} className="text-center h-100">
      <Card.Header>
        <Star clicked={clicked} handleClick={handleStarSelect} />
      </Card.Header>
      <Card.Body onClick={onClick}>
        <Image style={{ maxHeight: "18rem", maxWidth: "8rem" }} src={image_url} className="img-fluid mx-auto my-2" />
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {tagline} 
        </Card.Text>

      </Card.Body>
    </Card >
  );
  return <></>
}

export default Beer;
