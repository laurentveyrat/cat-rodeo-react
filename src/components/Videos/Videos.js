import React from 'react';
import { useQuery } from "graphql-hooks";
import './Videos.css';

import Video from './Video'

const VIDEOS_QUERY  = `query MyQuery {
    allVideos {
        videos {
          id
          url
          alt
        }
      }
  }`

function Videos () {

    const { loading, error, data } = useQuery(VIDEOS_QUERY)

    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";

    const allVideos = data.allVideos[0].videos.map( video  => (
        <Video key={video.id} video={video} />
    ))

    return (
        <div id="videos" className="margin-reduit">
            <h2>VIDEOS</h2>
            <div id="myVideos" className="videos">
                { allVideos }
            </div>
        </div>
    )
}

export default Videos;