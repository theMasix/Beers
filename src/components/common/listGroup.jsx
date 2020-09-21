import React from 'react';
import {StyledListGroup} from './styledComponents';
const ListGroup = (props) => {
    const { items, onItemSelect, selectedItem } = props;
    return (
        <StyledListGroup className="list-group list-group-horizontal-lg w-75 mx-auto mr-lg-0 pr-0 mb-3 mb-lg-0">
            <li class="list-group-item disabled" aria-disabled="true">
                <i class="fa fa-list ml-2" style={{opacity:".6"}}></i>
                 مرتب سازی بر اساس:
                 </li>
            {items.map(item =>
                <li
                    onClick={() => onItemSelect(item)}
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                    style={{cursor:"pointer"}}
                >
                    {item}
                </li>
            )}
        </StyledListGroup>
    );
}

export default ListGroup;