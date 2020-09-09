import React from 'react';
const MyExpandCollapse = ({ text }) => {
    return (
        <div id="module" class="container">
            <p class="collapse" id="collapseExample" aria-expanded="false">
                {text}
            </p>
            <a role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            </a>
        </div>
    );
}

export default MyExpandCollapse;
