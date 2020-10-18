import React from 'react';
import { DropdownToggle,Anchor } from './styledComponents';
const ListGroup = (props) => {
    const { items, onItemSelect, selectedItem } = props;
    return (

        <div className="dropdown" >
            <DropdownToggle className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" >
                <i className="fa fa-list ml-2" style={{ opacity: ".6" }}></i>
               دسته بندی بر اساس
            </DropdownToggle>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {items.map(item =>
                    <Anchor onClick={() => onItemSelect(item)} className="dropdown-item">{item}</Anchor>
                )}
            </div>
        </div>

    );
}

export default ListGroup;