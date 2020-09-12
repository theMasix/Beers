import React from 'react';
const ListGroup = (props) => {
    const { items, onItemSelect, selectedItem } = props;
    return (
        <ul className="list-group list-group-horizontal  pr-0" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 2px 2px 2px 2px" }}>
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
        </ul>
    );
}

export default ListGroup;