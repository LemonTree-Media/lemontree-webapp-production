import React from 'react';


function VideoEmbed(props) {
    return (
    	<div className="mobileHidden">
        	<iframe src={props.videoLink}  width="480" height="270" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        </div>
    );
}

export default VideoEmbed;
