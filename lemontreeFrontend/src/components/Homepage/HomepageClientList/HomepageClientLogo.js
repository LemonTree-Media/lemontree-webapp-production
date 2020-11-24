import React from 'react';

function HomepageClientLogo(props) {
    return (
        <div>

          <img className="client-logo" src={props.src} alt={props.clientName} />

        </div>
    );
}

export default HomepageClientLogo;
