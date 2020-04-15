import React from 'react';
import './NewsInfo.css';


const NewsInfo = ({ titreNews, dateNews, imageNews }) => {

    const dateIsoFormat = new Date(dateNews);
    const dateTable = dateIsoFormat.toDateString().split(' ').slice(1)
    const date = `${dateTable[1]} ${dateTable[0].toUpperCase()} ${dateTable[2]}`


    // const requireImage = chemin => {
    //     try {
    //         return require(`../../images/news/${chemin}`)
    //     } catch (err) {
    //         return require(`../../images/news/news-1.jpg`)
    //     }
    // }

    // const newsClass = () => {
    //     let numNews = Number(image[5])
    //     if (numNews % 2 === 0) return 'news-pair'
    // }

    return (
        <div className={`rectangle-news`}>
            <div className="news-image">
                <img src={imageNews.url} alt={imageNews.alt} />
            </div>
            <div className="news-text">
                <div className="news-infos">
                    <h3 className="news-titre">{titreNews}</h3>
                    <h4 className="news-date">{date}</h4>
                    <button className="view-more">VIEW MORE</button>
                </div>
            </div> 
        </div>
    )
}

export default NewsInfo;