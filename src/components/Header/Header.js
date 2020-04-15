import React, { useState } from 'react';
import { useQuery } from "graphql-hooks";
import './Header.css';

import MenuFixe from './MenuFixe'

const MAIN_IMAGE_QUERY  = `query MyQuery {
    mainImage {
        image {
          url
        }
      }
  }`

function Header () {
    const [menuResponsive, setMenuResponsive] = useState(false)

    const handleMenuResponsive = () => {
        setMenuResponsive(!menuResponsive)
    }

    const { loading, error, data } = useQuery(MAIN_IMAGE_QUERY)

    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";
    
    return (
        <header className="main-page">           
                <MenuFixe 
                    menuResponsive={menuResponsive}
                    handleMenuResponsive={handleMenuResponsive} />                  
                <div className="background-main-image">
                    <img src={data.mainImage.image.url} alt='Groupe de rock à paris, Cat Rodeo' />
                </div>
        </header>
    )
}

export default Header;