import React from 'react';
import './Music.css';

const Music = () => {
    return (
        <div id="music" className="margin-reduit">
        <h2>MUSIC</h2>
        <div className="music">
          <div className="rectangle-music">
            <div className="pochette-music"></div>
            <div className="sound-music">
              <iframe src="https://open.spotify.com/embed/artist/3u3AdIAMIeacvedYBqNouk" title='Open Spotify' width="100%" height="60%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <a href="https://open.spotify.com/artist/3u3AdIAMIeacvedYBqNouk" target="_blank" rel='noopener noreferrer'><button className="download">STREAM/DOWNLOAD</button></a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Music;