import React from 'react';

const Video = ({ video }) => {
    return (
        <div className="rectangle-videos">
            <a href="https://www.youtube.com/channel/UCYMl5EB3MwH_4p-NK5ex-eg/videos" target="_blank">
                <img src={video.url} alt={video.alt} />
            </a>
        </div> 
    )
}

export default Video;