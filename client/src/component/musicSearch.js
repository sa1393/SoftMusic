import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';

import "../css/musicSearch.css";
import DownloadButton from "./downloadButton";



let MusicSearch = ()=>{

    useEffect(()=> {
        console.log("11");
        var request=require('request');

        var optionParams={
            q:"아무노래",
            part:"snippet",
            key:"AIzaSyCFYSD6tJOcz2YoB45nP7qZYKpTmD0YiE4",
            maxResults:20,
            type:"video",
            maxResults:10,
            regionCode:"KR",
            videoDuration:"short"
        };

        optionParams.q=encodeURI(optionParams.q);

        var url="https://www.googleapis.com/youtube/v3/search?";
        for(var option in optionParams){
            url+=option+"="+optionParams[option]+"&";
        }

        url=url.substr(0, url.length-1);

        request(url, function(err, res, body){
            // console.log(body)
            
            //json형식을 서버로 부터 받음
            var data=JSON.parse(body).items;
            for(var content in data){
                
                //youtube downloader에 videoId 넘기면 됨.
                // console.log(data[content].snippet.title+" : "+data[content].id.videoId);
                console.log(data[content]);
            }
        });
    },[])

    return(
        <div className="search">
            <div className="searchBarArea">
                <FontAwesomeIcon icon={faSearch} className="searchIcon"></FontAwesomeIcon>
                <input type="text" className="searchBar"></input>
            </div>
            <div className="resultMusic">
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
                <DownloadButton id="UuV2BmJ1p_I" type="mp3" />
            </div>
        </div>
    )
}

export default MusicSearch;
