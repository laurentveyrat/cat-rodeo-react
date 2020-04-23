import React from 'react';
import { useQuery } from "graphql-hooks";
import './News.css';

import NewsInfo from './NewsInfo'

const NEWS_QUERY  = `query MyQuery {
  allNews(orderBy: dateNews_DESC) {
    titreNews
    dateNews
    imageNews {
      url
      alt
    }
    videoYt {
      url
    }
  }
}`

function News () {
  
    const { loading, error, data } = useQuery(NEWS_QUERY)

    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";

    const allNews = data.allNews.map(({ titreNews, dateNews, imageNews, videoYt }, index) => {
      let isPair = (index + 1) % 2 === 0
      return <NewsInfo key={titreNews} titreNews={titreNews} dateNews={dateNews} imageNews={imageNews} videoYt={videoYt} isPair={isPair} />
    })
        
    return (     
        <div id="news" className="margin-reduit">
            <h2>NEWS</h2>
            <div className="news">
                { allNews }
            </div>
        </div>
    )
}

export default News;