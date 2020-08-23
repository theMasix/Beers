import React from 'react';
import Media from 'react-bootstrap/Media'
const MyMedia = ({ data }) => {
    const { name, tagline, abv, description, srm, image_url } = data
    return (
        <Media>
            <img
                style={{ width: "5rem", height: "13rem" }}
                className="ml-3"
                src={image_url}
                alt="Generic placeholder"
            />
            <Media.Body className="text-right">
                <h5>{name}</h5>
                <p className="text-muted">{tagline}</p>
                <p>
                    <b>توضیحات:</b>
                    {description}
                </p>
                <ul>
                    <li><b>قیمت:</b>{srm}</li>
                    <li><b>درصد الکل:</b>{abv}</li>
                </ul>
            </Media.Body>
        </Media>
    );
}

export default MyMedia;
