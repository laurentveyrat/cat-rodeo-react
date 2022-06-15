import React, { useState } from 'react'
import { useQuery } from 'graphql-hooks'
import { Image } from 'react-datocms' // for lazy loading
import './Header.css'

import MenuFixe from './MenuFixe'

const MAIN_IMAGE_QUERY = `query MyQuery {
    mainImage {
        image {
            url
            responsiveImage {
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
                alt
                base64
            }
        }
      }
  }`

function Header () {
  const [menuResponsive, setMenuResponsive] = useState(false)

  const handleMenuResponsive = () => {
    setMenuResponsive(!menuResponsive)
  }

  const { loading, error, data } = useQuery(MAIN_IMAGE_QUERY)

  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

  return (
    <header className='main-page' id='header'>
      <MenuFixe
        menuResponsive={menuResponsive}
        handleMenuResponsive={handleMenuResponsive}
      />
      <div className='background-main-image'>
        {/* <img className='img-main' src={data.mainImage.image.url} alt='Rock band in Paris, Cat Rodeo' /> */}
        <Image className="img-main" data={data.mainImage.image.responsiveImage} />
      </div>
    </header>
  )
}

export default Header