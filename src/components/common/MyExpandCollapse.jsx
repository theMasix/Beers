import React from 'react';
const MyExpandCollapse = ({ text, maxCharactrrCount = 100 }) => {
    const [isTruncated, setIsTruncated] = React.useState(true);
    const resultstring = isTruncated ? text.slice(0, maxCharactrrCount) : text;
    const toggleIsTruncated = () => {
        setIsTruncated(!isTruncated);
    }
    return (
        <p className="d-block">
            {resultstring}
            <span onClick={toggleIsTruncated} style={{ cursor: "pointer" }}>
                {isTruncated ? <i class="fa fa-arrow-down" aria-hidden="true"></i> : <i class="fa fa-arrow-up" aria-hidden="true"></i>}
            </span>
        </p>
    );
}

export default MyExpandCollapse;
