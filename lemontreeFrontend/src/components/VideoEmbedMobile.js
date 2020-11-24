import React from 'react';


function VideoEmbedMobile(props) {
    return (
    	<div className="regularHidden">
        	<iframe src={props.videoLink} width="300" height="169" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        </div>
    );
}

export default VideoEmbedMobile;
