import React from 'react';

import logo from '../assets/logo.png'

function Logo(props) {
    return (
        <img
            src={logo}
            alt="LemonTree Media logo"
            height={props.height || 30}
            width={3/2 * props.height || 42.5}
        />
    );
}

export default Logo;
