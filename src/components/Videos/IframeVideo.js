import React from 'react'
import './IframeVideo.css'

const IframeVideo = ({ showIframe, toggleIframe, video }) => {
    if (!showIframe) {
        return null
    }

    var youtubeId="9x5HkcY0pe4"
    if (video.customData) {
      youtubeId=video.customData.youtubeId
    }

    return (
        <div className='modal-video' onClick={() => toggleIframe()}>
          <div className='boite-video'>
            <iframe 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            />
          </div>
        </div>
      )
  }

  export default IframeVideo;