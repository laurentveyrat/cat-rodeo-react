import React from 'react';
import './NewsInfo.css';


const NewsInfo = ({ titreNews, dateNews, imageNews, videoYt, isPair }) => {

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

    const addMarginTop = () => {
        if (isPair) {
            return 'news-pair'
        }
    }

    const urlVideoYt = () => {
        if (videoYt === null) {
            return "https://www.youtube.com/channel/UCYMl5EB3MwH_4p-NK5ex-eg/videos"
        }
        return videoYt.url
    }

    return (
        <div className={`rectangle-news ${addMarginTop()}`}>
            <div className="news-image">
                <img src={imageNews.url} alt={imageNews.alt} />
            </div>
            <div className="news-text">
                <div className="news-infos">
                    <h3 className="news-titre">{titreNews}</h3>
                    <h4 className="news-date">{date}</h4>
                    <a href={urlVideoYt()} target="_blank" rel="noopener noreferrer">
                        <button className="view-more">VIEW MORE</button>
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default NewsInfo;