import React from 'react';

const Video = ({ video }) => {
    return (
        <div className="rectangle-videos">
            <img src={video.url} alt={video.alt} />
        </div> 
    )
}

export default Video;