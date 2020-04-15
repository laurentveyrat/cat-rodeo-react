import React from 'react';
import { useQuery } from "graphql-hooks";
import './News.css';

import NewsInfo from './NewsInfo'
// import news from '../../news'


const NEWS_QUERY  = `query MyQuery {
  allNews(orderBy: dateNews_DESC) {
    titreNews
    dateNews
    imageNews {
      url
      alt
    }
  }
}`

function News () {
    // const [news, setNews] = useState({})

    const { loading, error, data } = useQuery(NEWS_QUERY)

    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";

    const allNews = data.allNews.map(({ titreNews, dateNews, imageNews }) => (
      <NewsInfo key={titreNews} titreNews={titreNews} dateNews={dateNews} imageNews={imageNews} />
    ))
        
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