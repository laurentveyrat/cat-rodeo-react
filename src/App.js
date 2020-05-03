import React, { Fragment } from 'react';
import './App.css';

// import { useQuery } from "graphql-hooks";
// import { renderMetaTags } from "react-datocms";
// import { Helmet } from "react-helmet";

import Header from './components/Header/Header'
import Tour from './components/Tour/Tour'
import News from './components/News/News'
import Videos from './components/Videos/Videos'
import Music from './components/Music/Music'
import Photos from './components/Photos/Photos'
import Contact from './components/Contact/Contact'
import Follow from './components/Follow/Follow'
import Footer from './components/Footer/Footer'



function App() {
    return (
      <Fragment>
        <Header />
        <Tour /> 
        <News />
        <Videos />
        <Music />
        <Photos />
        <Contact />
        <Follow />
        <Footer />
      </Fragment>
    )
}

export default App;
