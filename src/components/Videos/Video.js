import React, { useState } from 'react';
import IframeVideo from './IframeVideo';

// const Video = ({ video }) => {
//     return (
//         <div className="rectangle-videos">
//             <a href="https://www.youtube.com/channel/UCYMl5EB3MwH_4p-NK5ex-eg/videos" target="_blank">
//                 <img src={video.url} alt={video.alt} />
//             </a>
//         </div> 
//     )
// }



const Video = ({ video }) => {
    const [showIframe, setShowIframe] = useState(false)
  
  
    function toggleIframe (e) {
        setShowIframe(!showIframe)
    }
  
    return (
      <>
        <div className="rectangle-videos">
          <img
            onClick={() => toggleIframe()}
            src={video.url}
            alt={video.alt}
          />
        </div>
        <IframeVideo showIframe={showIframe} toggleIframe={toggleIframe} video={video} />
      </>
    )
  }


export default Video;