import React from 'react';
const Star = ({clicked,handleClick}) => {
    let classes=" float-right fa-2x fa fa-star";
    if(!clicked) classes+="-o";
    return ( 
    <i className={classes} onClick={handleClick} style={{cursor:"pointer"}} aria-hidden="true"></i> 
);
}
 
export default Star;

