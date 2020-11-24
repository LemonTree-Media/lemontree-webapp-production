import React from 'react';


function VideoEmbed90(props) {
    return (
        <iframe className="generalEmbed" src={props.videoLink} width="480" height="270" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>

    );
}

export default VideoEmbed90;
