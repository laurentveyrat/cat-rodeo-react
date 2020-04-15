import React from 'react';
import { useQuery } from "graphql-hooks";
import './Photos.css';

import Photo from './Photo'

const PHOTOS_QUERY  = `query MyQuery {
    allPhotos {
        photos {
          id
          url
          alt
        }
      }
  }`

function Photos () {
  
    const { loading, error, data } = useQuery(PHOTOS_QUERY)

    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";

    const allPhotos = data.allPhotos[0].photos.map( photo  => (
        <Photo key={photo.id} photo={photo} />
    ))

    return (
        <div id="photos" className="margin-reduit">
            <h2>PHOTOS</h2>
            <div id="myPhotos" className="photos">
                { allPhotos }
            </div>
        </div>
    ) 
}

export default Photos;